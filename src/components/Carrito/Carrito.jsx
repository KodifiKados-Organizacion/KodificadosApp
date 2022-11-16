import { useState } from "react";
import Productoseleccionado from "./Productoseleccionado";

const Carrito = ({ carrito, setcarrito }) => {
   let precioacumulado=0;
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

    const quitarproductodecarrito = (id) => {
        const newcarrito = carrito.filter((producto) => producto._id != id);
        setcarrito(newcarrito);
    };
     const EnviaVenta=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(carrito))



     }

  
    return (
        <div>
            <ul className="list-group">
                 <form onSubmit={EnviaVenta}>
                {carrito.map((producto) => {
                    return (<><Productoseleccionado  producto={producto} quitarproductodecarrito={quitarproductodecarrito}/>
                  <span className="text-success"><strong> { precioacumulado+=parseFloat(producto.PrecioVenta) }</strong></span>
                    </>);
                })}
                <button >Finalizar Compra</button>
                </form>
            </ul>
        </div>
    );
};
export default Carrito;
