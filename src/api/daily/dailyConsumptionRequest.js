import {USER_ID} from "../../const/Constant";
import {get, post} from "../http";


export function consumptionQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("consumption/group", params, success, fail, err);
}

export function consumptionAdd(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("consumption/add", params, success, fail, err);
}

export function consumptionPagination(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("consumption/pagination", params, success, fail, err);
}

