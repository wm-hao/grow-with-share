import {USER_ID} from "../../const/Constant";
import {post} from "../http";


export function balanceQry(params, success, fail, err) {
    if (params) {
        params.userId = sessionStorage.getItem(USER_ID);
    }
    return post("balance/pagination", params, success, fail, err);
}


