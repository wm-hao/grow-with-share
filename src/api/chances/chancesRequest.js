import {USER_ID} from "../../const/Constant";
import {get, post} from "../http";


export function chancesQryAll(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("chance/all", params, success, fail, err);
}

export function chanceAdd(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("chance/add", params, success, fail, err);
}

export function chanceUpdate(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("chance/update", params, success, fail, err);
}

export function chanceExport(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("chance/export", params, success, fail, err);
}


export function chanceDelete(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("chance/update", params, success, fail, err);
}

