import { useReducer } from 'react'
import { types } from '../Types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    user: null,
    logged: false
}

export const AuthProvider = ({children}) => {

    const [ state, dispatch] = useReducer( authReducer, initialState )

    const login = ( user = '' ) => {
        const action ={
            type: types.login,
            payload: user
        }
        dispatch( action )
    }

  return (
    <AuthContext.Provider value={{
        ...state,
        login: login 

    }}>
        { children }
    </AuthContext.Provider>
  )
}
