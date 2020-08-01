import {USER_ID} from "../../const/Constant";
import {get, post} from "../http";

export function journalQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("journal/pagination", params, success, fail, err);
}

export function journalAdd(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("journal/add", params, success, fail, err);
}

export function journalUpdate(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("journal/update", params, success, fail, err);
}
