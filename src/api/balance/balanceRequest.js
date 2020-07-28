import {USER_ID} from "../../const/Constant";
import {post,get} from "../http";


export function balanceQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("balance/pagination", params, success, fail, err);
}

export function balanceToadyUpdate(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("balance/today", params, success, fail, err);
}

export function balanceToadyQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return get("balance/today", params, success, fail, err);
}
