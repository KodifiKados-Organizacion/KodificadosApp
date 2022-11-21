import React, { useContext } from 'react'
import { AuthContext } from '../../auth/Context'


export const VentasCLiente = () => {
    const{user} = useContext(AuthContext)
    console.log(user);
    const products = JSON.parse(localStorage.getItem('products'));

    
        

  return (
    <form>
        <p>{user.id}</p>
        <p>{user.user}</p>
        <p>{user.apellido}</p>
        <p>{user.email}</p>
        <p>{user.tel}</p>
        <p>{user.dir}</p>
        <p>{user.ciudad}</p>
        <p>{products.product}</p>
        <p>{products.precio}</p>
        <p>{products.cantidadVenta}</p>
        <p>{products.descripcion}</p>
        <p>{products.categoria}</p>
        <p>{products.total}</p>
  

    </form>
  )
}
