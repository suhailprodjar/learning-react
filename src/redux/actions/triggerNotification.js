export default function triggerNotification({
    messageText = '',
    isIdle = false,
    buttonText = null,
    buttonAction = null
}) {
    return dispatch =>
        new Promise((res, rej) => {
            dispatch({
                type: 'NOTIFICATION',
                payload: {
                    messageText,
                    isIdle,
                    buttonText,
                    buttonAction
                }
            })
        });
}
