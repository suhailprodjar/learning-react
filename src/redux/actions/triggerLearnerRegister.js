import { triggerSimpleAjax } from "../../helper/utils/httpHelper";
import { AppConfig } from "../../app-config";

export default function triggerLearnerRegister(requestData) {
    return dispatch =>
        new Promise((res, rej) => {
            let url = `${AppConfig.api_url}register/learners`;
            triggerSimpleAjax(
                url,
                'POST',
                requestData,
                response => {
                    if (response.status === 'Created') {
                        dispatch({
                            type: 'LEARNER',
                            payload: {
                                code: response.learnerCode,
                                status: 'REGISTER_SUCCEED',
                                name: requestData.name
                            }
                        });
                        res({ code: response.learnerCode});
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
