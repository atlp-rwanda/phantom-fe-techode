import  { userActionTypes } from "../constants/userActionTypes"

const { UPDATE, GET_FIRSTNAME, GET_USERNAME ,GET_LASTNAME ,SET_PROFILE } = userActionTypes;


const initialState = {
    id: 0, 
    username: '',
    firstname: '',
    lastname: '',
    telephone: '',
    email:'', 
    type:'',
    profile:''  
}

export const userReducer = (state = initialState , { type , payload}) =>{
    switch (type) {
        case GET_USERNAME:
            return state.username;   
        case GET_FIRSTNAME: 
            return state.firstname;
        case GET_LASTNAME: 
            return state.lastname;
        case SET_PROFILE: 
            let clonedState = {...state};
            clonedState.profile = payload;
            state = clonedState;
            return state;
        case UPDATE: 
            let updates = {...state};

            updates.id = payload.id;
            updates.email = payload.email;
            updates.username = payload.username;
            updates.telephone = payload.phone;
            updates.firstname = payload.firstName;
            updates.lastname = payload.lastName;
            updates.profile = payload.profile == null ? `https://image.shutterstock.com/z/stock-vector-man-cartoon-icon-over-white-background-colorful-design-vector-illustration-602405828.jpg` : payload.profile ; 
            updates.id = payload.id;
            if(payload.type){
                updates.type = payload.type.toLowerCase()
            }
            state = updates;
            return state;       
        default:
            return state;
    }
}