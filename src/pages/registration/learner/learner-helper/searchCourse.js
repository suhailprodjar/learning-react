import { triggerSimpleAjax } from "../../../../helper/utils/httpHelper";
import { AppConfig } from "../../../../app-config";

export default function searchCourse(value, callbackAction) {
    let url = `${AppConfig.api_url}getCourse/${value}`;
    return new Promise((res, rej) => {
        triggerSimpleAjax(
            url,
            'GET',
            {},
            response => {
                if(response.status === 200) {
                    callbackAction(response.data);
                }
                res('Promised resolved from fetch');
            },
            error => {
                callbackAction([]);
                rej('Failed');
            }
        );
    });
}