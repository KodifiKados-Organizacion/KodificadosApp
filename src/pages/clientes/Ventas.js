import React, { useContext } from 'react'
import { AuthContext } from '../../auth/Context'
import getData from '../../data/Assets/getData';


export const VentasCLiente = () => {
    const { userauth } = useContext(AuthContext);
    let user;
    {userauth? user = userauth : user = JSON.parse(localStorage.getItem('user'))}
    const datos = {
        NombreVendedor: "Kodifikados",
        ApellidoVendedor: "Online Store",
        EmailVendedor: "kodifikados@gmail.com",
        NombreCliente: user.user,
        ApellidoCliente: user.apellido,
        EmailCliente: user.email,
        TelCliente: user.tel,
        DirCliente: user.dir,
        CiudadCliente: user.ciudad,
        FechaVenta: new Date().toLocaleDateString(),
        CantidadVendida: 2,
        TotalVenta: 100000,
    }
    const url = 'http://localhost:5000/api/sales/NewSale';
    const data = getData(url, datos);
    console.log(data);
    
        

  return (
    <form>
        <p>{user.id}</p>
        <p>{user.user}</p>
        <p>{user.apellido}</p>
        <p>{user.email}</p>
        <p>{user.tel}</p>
        <p>{user.dir}</p>
        <p>{user.ciudad}</p>
        {/* <p>{products.product}</p>
        <p>{products.precio}</p>
        <p>{products.cantidadVenta}</p>
        <p>{products.descripcion}</p>
        <p>{products.categoria}</p>
        <p>{products.total}</p> */}
  

    </form>
  )
}
