import React, { useContext } from 'react'
import { AuthContext } from '../../auth/Context'
import { useFetchyRef } from '../../data/hooks/useFethc'
import { useForm } from '../../hooks/useForm'

export const VentasCLiente = () => {
    const{user} = useContext(AuthContext)
    console.log(user);
    const {Values, HandleInputChange} = useForm({
        userId: user.id,
        nombre: user.user,
        apellido:user.apellido,
        email:user.email,
        telefono:user.tel,
        direccion:user.dir,
        ciudad:user.ciudad,
        productos: [],
        total:0,
        fechaVenta: toString( new Date() ),
    })

    const {userId, nombre, apellido, email, telefono, direccion, ciudad, productos, total, fechaVenta} = Values;

    const HandleSubmit = (e) => {
        e.preventDefault();
    }

    const HandleClick = (e) => {
        let url = 'http://localhost:5000/api/sales';
        e.preventDefault();
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
         /*Modelo de datos
    IdVendedor: Number,
    NombreVendedor: String,
    ApellidoVendedor: String,
    EmailVendedor: String,
    IdComprador: Number,
    NombreComprador: String,
    ApellidoComprador: String,
    EmailComprador: String,
    IdProductos: {
        NombreProducto: String,
        DescripcionProducto: String,
        PrecioProducto: Number,
        CantidadProducto: Number,
        CategoriaProducto: String,
    },
    FechaVenta: String,
    CantidadVendida: Number,
    TotalVenta: Number,
   
   */
    const {data, loading, error} = useFetchyRef(url, 'POST', newVenta);
    console.log(data);
    console.log(loading);
    console.log(error);
    }
        

  return (
    <form onChange={HandleSubmit}>
        <p>{userId}</p>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            placeholder="Nombre"
            value={nombre}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input
            type="text"
            className="form-control"
            id="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="telefono">Telefono</label>
            <input
            type="number"
            className="form-control"
            id="telefono"
            placeholder="Telefono"
            value={telefono}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="direccion">Direccion</label>
            <input
            type="text"
            className="form-control"
            id="direccion"
            placeholder="Direccion"
            value={direccion}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="ciudad">Ciudad</label>
            <input
            type="text"
            className="form-control"
            id="ciudad"
            placeholder="Ciudad"
            value={ciudad}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="productos">Productos</label>
            <textarea
            type="text"
            className="form-control"
            id="productos"
            placeholder="Productos"
            value={productos}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="total">Total</label>
            <input
            type="number"
            className="form-control"
            id="total"
            placeholder="Total"
            value={total}
            onChange={HandleInputChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <input
            type="text"
            className="form-control"
            id="estado"
            placeholder="Estado"
            value={fechaVenta}
            onChange={HandleInputChange}
            />  
        </div>
        <button type="submit" onClick={ HandleClick } className="btn btn-primary">Submit</button>

    </form>
  )
}
