import * as type from "../constants/accountActionTypes"

const initialState={
    forgotPassword:{
        loading:false,
        message:null,
        success:false,
        error:null
    }
}


export const forgotPasswordReducer = (state=initialState, { type , payload})=>{
    switch(type){
        case type.FORGOT_PASSWORD_START:
            return {
                ...state,
                forgotPassword:{
                    loading:true,
                    message:null,
                    success:false,
                    error:null
                }
            }
        case type.FORGOT_PASSWORD_SUCCESS:{
            return {
                ...state,
                forgotPassword:{
                    loading:false,
                    message:payload,
                    success:true,
                    error:null
                }
            }
        }
        case type.FORGOT_PASSWORD_FAILURE:{
            return {
                ...state,
                forgotPassword:{
                    loading:false,
                    message:null,
                    success:false,
                    error:payload
                }
            }
        }
        default:
            return state

    }

}

