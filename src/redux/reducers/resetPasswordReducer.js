import * as type from "../constants/accountActionTypes"

const initialState={
    resetPassword:{
        loading:false,
        message:null,
        success:false,
        error:null
    }
}


export const resetPasswordReducer = (state=initialState, { type , payload})=>{
    switch(type){
        case type.RESET_PASSWORD_START:
            return {
                ...state,
                resetPassword:{
                    loading:true,
                    message:null,
                    success:false,
                    error:null
                }
            }
        case type.RESET_PASSWORD_SUCCESS:{
            return {
                ...state,
                resetPassword:{
                    loading:false,
                    message:payload,
                    success:true,
                    error:null
                }
            }
        }
        case type.RESET_PASSWORD_FAILURE:{
            return {
                ...state,
                resetPassword:{
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

