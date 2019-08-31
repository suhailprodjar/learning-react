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
                        res({ code: response.tutorCode});
                    }
                    res('Promised resolved from fetch');
                },
                error => {
                    if (error.status === 417) {
                        dispatch({
                            type: 'NOTIFICATION',
                            payload: {
                                messageText: 'Sorry for this.. Your mobile number already registered'
                            }
                        })
                    }
                    rej('Failed');
                }
            );
        });
}
