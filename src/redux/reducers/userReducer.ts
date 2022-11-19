import * as actionTypes from "../actions/actionTypes"
import initialState from "../initialState";

export default function loginReducer(state = initialState, action: any) 
{
    switch (action.type) 
    {
        case actionTypes.USER_LOGIN:
            return state;

        default:
            return state;
    }
}