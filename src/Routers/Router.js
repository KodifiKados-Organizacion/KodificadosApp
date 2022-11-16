import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutUs } from '../pages/about/AboutUs'
import { Admins } from '../pages/admins/Admins'
import { Clientes } from '../pages/clientes/clientes'
import { Home } from '../pages/home/Home'
import { EditProduc } from '../components/Admin/EditProduc'
import { Ventas } from '../components/Admin/Ventas'
import FormAgregar from '../components/Productos/FormAgregar';


export const Router = () => {

  return (
    <Routes>
        <Route path="Home" element={<Home />} />
        <Route path='Cliente' element={<Clientes />} />
        <Route path='Admin/EditProduct' element={<EditProduc />} />
        <Route path='Admin' element={<Admins />} />
        <Route path='About' element={<AboutUs />} />
        <Route path='/Admin/Ventas' element={<Ventas />} />
        <Route path='/Admin/AgregarProducto' element={<FormAgregar/>}/>

        
        <Route path='/*' element={<Navigate to="/Home" />} />
  </Routes>
  )
}
