
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/login'
import { AboutUs } from '../pages/about/AboutUs'
import Registro from"../auth/Registro"
import { Router } from './Router'



export const RouterAuth = () => {
let isAuth = true;
  return (
    <Routes>
        { isAuth == false ?<Route path="Login" element={<Login />} />: null}
        <Route path="/Login/Registro" element={<Registro />} />
        <Route path='About' element={<AboutUs />} />
        { isAuth == false ? <Route path='/' element={<Navigate to="/Login" />} />: null}
        { isAuth ?  <Route path='/*' element= { <Router />} /> : <Route path='/*' element={<Navigate to="/Login" />} /> }
  </Routes>
  )
}
