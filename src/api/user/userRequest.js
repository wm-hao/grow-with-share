import {get, post} from "../http";
import {USER_ID} from "../../const/Constant";

// 用户验证
export function userValidate(params, success, fail, err) {
    return post("user/validate", params, success, fail, err);
}

// 验证码
export function userVerifyCode(params, success, fail, err) {
    return get("user/verifyCode", params, success, fail, err);
}


// 用户退出
export function userLogout(params, success, fail, err) {
    if (params) {
        params.id = sessionStorage.getItem(USER_ID);
    }
    return post("user/logout", params, success, fail, err);
}


// 用户退出
export function userUpdatePass(params, success, fail, err) {
    if (params) {
        params.id = sessionStorage.getItem(USER_ID);
    }
    return post("user/updatePass", params, success, fail, err);
}
