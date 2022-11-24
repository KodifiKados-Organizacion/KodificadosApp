
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/login'
import { AboutUs } from '../pages/about/AboutUs'
import Registro from"../auth/Registro"
import { Router } from './Router'
import { useContext } from 'react'
import { AuthContext } from '../auth/Context'



export const RouterAuth = () => {
const { user, logged } = useContext(AuthContext);

let isAuth = logged;
let userauth;
{user? userauth = user  : userauth  = JSON.parse(localStorage.getItem('user'))}

if(JSON.parse(localStorage.getItem('user'))){
  isAuth = true;
}
console.log(isAuth);
  return (
    <Routes>
        { isAuth === false ?<Route path="Login" element={<Login />} />: null}
        <Route path="/Login/Registro" element={<Registro />} />
        <Route path='About' element={<AboutUs />} />
        { isAuth === false ? <Route path='/' element={<Navigate to="/Login" />} />: null}
        { isAuth ?  <Route path='/*' element= { <Router />} /> : <Route path='/*' element={<Navigate to="/Login" />} /> }
  </Routes>
  )
}
