import { triggerSimpleAjax } from "../../helper/utils/httpHelper";
import { AppConfig } from "../../app-config";

export default function triggerLearnerDetails(requestData) {
    return dispatch =>
        new Promise((res, rej) => {
            let url = `${AppConfig.api_url}register/learnerDetails`;
            triggerSimpleAjax(
                url,
                'POST',
                requestData,
                response => {
                    dispatch({
                        type: 'NOTIFICATION',
                        payload: {
                            messageText: 'Thanks for your registration',
                            isIdle: false,
                            buttonText: null,
                            buttonAction: null
                        }
                    });
                    res('Promised resolved from fetch');
                },
                error => {
                    rej('Failed');
                }
            );
        });
}
