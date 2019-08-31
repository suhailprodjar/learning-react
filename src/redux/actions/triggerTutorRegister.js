import { triggerSimpleAjax } from "../../helper/utils/httpHelper";
import { AppConfig } from "../../app-config";

export default function triggerTutorRegister(requestData) {
    const { isInstitute = false } = requestData;
    return dispatch =>
        new Promise((res, rej) => {
            let url = `${AppConfig.api_url}register/tutor`;
            triggerSimpleAjax(
                url,
                'POST',
                requestData,
                response => {
                    if (response.status === 'Created') {
                        dispatch({
                            type: 'TUTOR',
                            payload: {
                                type: isInstitute ? 'INSTITUTOR' : 'TUTOR',
                                code: response.tutorCode,
                                status: 'REGISTER_SUCCEED',
                                name: requestData.name
                            }
                        });
                        dispatch({
                            type: 'NOTIFICATION',
                            payload: {
                                messageText: 'Thanks for your registration',
                                isIdle: false,
                                buttonText: null,
                                buttonAction: null
                            }
                        });
                        res({ code: response.tutorCode});
                    }
                    res('Promised resolved from fetch');
                },
                error => {
                    if (error.status === 417) {
                        dispatch({
                            type: 'NOTIFICATION',
                            payload: {
                                messageText: 'Your mobile number already registered'
                            }
                        })
                    }
                    rej('Failed');
                }
            );
        });
}
