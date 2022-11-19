import React, { useContext } from 'react'
import { AuthContext } from '../../auth/Context'


export const VentasCLiente = () => {
    const{user, products } = useContext(AuthContext)
    console.log(user);
    console.log(products.id);


    const HandleClick = (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/api/sales';
       
        const newVenta = {
            IdVendedor: "00001",
            NombreVendedor: "KodifiKados",
            ApellidoVendedor: "KodifiK2",
            EmailVendedor: "kodifikados@gmail.com",
            IdComprador: user.id,
            NombreComprador: user.user,
            ApellidoComprador: user.apellido,
            EmailComprador: user.email,
            TelComprador: user.tel,
            DirecionComprador: user.dir,
            CiudadCompra: user.ciudad,
            IdProductos:[
                {
                    id: 1,
                NombreProducto: "Asus 14",
                DescripcionProducto: "Asus 14",
                PrecioProducto: 3500000,
                CantidadProducto: 4,
                CategoriaProducto: "Computadores",
                },
                {
                    id: 2,
                NombreProducto: "Asus 14",
                DescripcionProducto: "Asus 14",
                PrecioProducto: 3500000,
                CantidadProducto: 4,
                CategoriaProducto: "Computadores",
                }
            ],
            FechaVenta: toString( new Date() ),
            CantidadVendida: 8,
        }
        console.log(newVenta);
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newVenta),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then( res => res.json() )
        .then( data => console.log(data) )
        .catch( err => console.log(err) )

    }
        

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
        <button type="submit" onClick={ HandleClick } className="btn btn-primary">Submit</button>

    </form>
  )
}
