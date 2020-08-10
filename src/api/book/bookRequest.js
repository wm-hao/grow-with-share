import {USER_ID} from "../../const/Constant";
import {get, post} from "../http";

export function bookQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("book/list", params, success, fail, err);
}

export function bookAdd(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("book/add", params, success, fail, err);
}

export function bookUpdate(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("book/update", params, success, fail, err);
}
