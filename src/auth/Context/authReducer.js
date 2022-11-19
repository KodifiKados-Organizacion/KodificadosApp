import { types } from "../Types/types";



export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload

            }
                
        case types.logout:
            return {
                logged: false,
                user: null
            }

        case types.register:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
            
        default:
            return state;
    }
}