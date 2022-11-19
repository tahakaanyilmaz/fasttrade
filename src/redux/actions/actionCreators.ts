import * as actionTypes from "./actionTypes";

export const userLogin = (user: any) => ({ type: actionTypes.USER_LOGIN, payload: user })