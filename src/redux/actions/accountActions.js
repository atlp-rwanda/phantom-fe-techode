import * as type from "../constants/accountActionTypes"
import * as API from "../../api"
import axios from "axios"
import Notify from "../../functions/Notify";

export const forgotPassword = (formData) => async (dispatch) => {

    try {
        const data = await API.forgotPassword({ email: formData })

        Notify(`${data.data.message}`, "success");

        return dispatch({
            type: type.FORGOT_PASSWORD_SUCCESS,
            payload: data
        })

    } catch (error) {
        const errorMessage = error.response.data.message

        Notify(`${error.response.data.message}`, "error");

        return dispatch({
            type: type.FORGOT_PASSWORD_FAILURE,
            payload: errorMessage
        })
    }
}

export const resetPassword = (password, Token, history) => async (dispatch) => {

    try {
        
        const response=  await API.resetPassword(Token,{ password: password });
        const { data } = response;
        if (data) {
            history.push("/login");
        }

        return dispatch({
            type: type.RESET_PASSWORD_SUCCESS,
            payload: data
        })
    } catch (error) {
        const errorMessage = error.message
        return dispatch({
            type: type.RESET_PASSWORD_FAILURE,
            payload: errorMessage
        })
    }
}