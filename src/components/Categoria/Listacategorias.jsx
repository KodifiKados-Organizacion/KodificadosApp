import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getCategoriesAll } from "../../data/services/categoryServices.js"
const Listacategorias = () => {

  const [categorias, setcategorias] = useState();

  const getCategorias = async () => {
    const data = await fetch("http://localhost:5000/api/categorys");
    const resp = await data.json();
    setcategorias(resp)
  }
  useEffect(() => {
    getCategorias()

  }, [])


  return (
    <div>{categorias.map((categoria) => {
      <li>{categoria.Nombre}</li>
    })}</div>
  )
}

export default Listacategorias