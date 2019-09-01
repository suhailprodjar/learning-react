import { triggerSimpleAjax } from "../../helper/utils/httpHelper";
import { AppConfig } from "../../app-config";

export default function triggerTrainerDetails(requestData) {
    return dispatch =>
        new Promise((res, rej) => {
            let url = `${AppConfig.api_url}register/trainerDetails`;
            triggerSimpleAjax(
                url,
                'POST',
                requestData,
                response => {
                    dispatch({
                        type: 'NOTIFICATION',
                        payload: {
                            messageText: 'Thanks for your details.. Will call you back soon..',
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