import { useReducer } from 'react'
import { useFetchyRef } from '../../data/hooks/useFethc'
import { types } from '../Types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    user: null,
    logged: false
}

export const AuthProvider = ({children}) => {

    const [ state, dispatch] = useReducer( authReducer, initialState )
    const url = 'http://localhost:5000/api/register';
    const { data, loading, error } = useFetchyRef( url, 'GET' );
    console.log(data);
    console.log(loading);
    console.log(error);
    const login = async ( user = {} ) => {
        console.log(user);
        const usuario = data.filter( param => param.Email === user.Email );
        console.log(usuario);
        console.log(usuario[0].Password);
        if( usuario[0].Password === user.Password ){
        const action ={
            type: types.login,
            payload: {
                user: usuario[0].Nombre,
                apellido: usuario[0].Apellido,
                admin: usuario[0].Admin,
                id: usuario[0]._id,
                email: usuario[0].Email,
                tel: usuario[0].Telefono,
                dir: usuario[0].Direccion,
                ciudad: usuario[0].Ciudad,
            }
        }
        dispatch( action )
        }else{
            console.log('Error');
        }
        
    }

    const logout = () => {
        const action = {
            type: types.logout
        }
        dispatch( action )
    }

    const register = ( user = {} ) => {
        const action = {
            type: types.register,
            payload: {
                user: user.Nombre,
                apellido: user.Apellido,
                admin: user.Admin,
                id: user._id,
                email: user.Email,
                tel: user.Telefono,
                dir: user.Direccion,
                ciudad: user.Ciudad,
            }
        }
        dispatch( action )
    }
    const products = ( products = {}, cantidad = 1 ) => {
        const action = {
            type: types.products,
            payload: {
                product: products.Nombre,
                precio: products.Precio,
                id: products._id,
                stock: products.Stock,
                categoria: products.Categoria,
                descripcion: products.Descripcion,
                cantidadVenta: cantidad,
            }
        }
        dispatch( action )
    }
  

  return (
    <AuthContext.Provider value={{
        ...state,
        login: login, 
        logout: logout,
        register: register,
        products: products
    }}>
        { children }
    </AuthContext.Provider>
  )
}
