import {USER_ID} from "../../const/Constant";
import {post,get} from "../http";

export function historyQryPagination(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("trade/pagination", params, success, fail, err);
}

export function recordUpdate(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("trade/update", params, success, fail, err);
}

export function recordDelete(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("trade/delete", params, success, fail, err);
}

export function recordSave(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("trade/add", params, success, fail, err);
}

export function recordProfitQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("trade/profit", params, success, fail, err);
}

export function recordFrequencyQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("trade/frequency", params, success, fail, err);
}
