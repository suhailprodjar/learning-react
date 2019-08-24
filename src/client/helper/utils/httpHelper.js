import _isEmpty from '../loadash/_isEmpty';
import fetch from 'node-fetch';
const timeoutDuration = 60000;

export function triggerSimpleAjax(
    requestURL,
    method = 'POST',
    body = {},
    onSuccess,
    onFailure,
    customHeader = {}
) {
    let headerObject = {
        'Content-Type': 'application/json'
    };

    if (customHeader && !_isEmpty(customHeader)) {
        headerObject = {
            ...headerObject,
            ...customHeader
        };
    }

    const headers = headerObject;

    const requestDetails = {
        method,
        mode: 'cors',
        credentials: 'include',
        headers
    };

    if (method !== 'GET') requestDetails.body = JSON.stringify(body);

    /**
     * This promise will start the network request and will return the data from the server
     * or throw errors in case the network request fails
     */
    const request = new Promise((resolve, reject) => {
        // console.log(requestURL);
        // console.log(body);
        // console.log(JSON.stringify(body));
        // console.log(method);
        // console.log(headers);

        fetch(requestURL, requestDetails)
            .then(data => {
                if (data.status === 200) {
                    return data.json();
                } else {
                    return reject(data);
                }
            })
            .then(result => {
                resolve(result);
            })
            .catch(err => {
                reject(err);
            });
    });

    /**
     * Will execute a reject action after the `timeoutDuration`
     * If it executes this will mark the network request as timed out
     */
    const networkTimeOut = reject => {
        return setTimeout(() => {
            const errorObject = Error(
                JSON.stringify({
                    status: `Request timed out!`,
                    url: requestURL
                })
            );
            reject(errorObject);
        }, timeoutDuration);
    };

    /**
     * Starts both the timeout and the network request
     * and resolves whichever executes first.
     */
    new Promise((resolve, reject) => {
        const timeoutId = networkTimeOut(reject);
        request
            .then(result => {
                clearTimeout(timeoutId);
                onSuccess(result);
                resolve(result);
            })
            .catch(error => {
                clearTimeout(timeoutId);
                onFailure && onFailure(error);
                reject(error);
            });
    });
}