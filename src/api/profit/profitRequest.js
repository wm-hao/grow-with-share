import {USER_ID} from "../../const/Constant";
import {get} from "../http";


export function profitQryTop(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("profit/top", params, success, fail, err);
}

export function profitQryCompare(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("profit/compare", params, success, fail, err);
}

export function profitQryTotal(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("profit/total", params, success, fail, err);
}

export function profitQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("profit/pagination", params, success, fail, err);
}


