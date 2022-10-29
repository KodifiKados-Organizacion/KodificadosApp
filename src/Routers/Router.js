import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../auth/login'
import { AboutUs } from '../pages/about/AboutUs'
import { Admins } from '../pages/admins/Admins'
import { Clientes } from '../pages/clientes/clientes'
import { Home } from '../pages/home/Home'
import Ingreso from"../auth/Ingreso"
import Registro from"../components/Cliente/Registro"


export const Router = () => {
  return (
    <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Ingreso" element={<Ingreso />} />
        <Route path='Cliente' element={<Clientes />} />
       
        <Route path='Admin' element={<Admins />} />
        <Route path='About' element={<AboutUs />} />
        <Route path='/' element={<Navigate to="/Home" />} />
        <Route path='Login/Registro' element={<Registro/>} />
  </Routes>
  )
}
