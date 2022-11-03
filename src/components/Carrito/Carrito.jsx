import { useState } from "react";
import Productoseleccionado from "./Productoseleccionado";

const Carrito = ({ carrito, setcarrito }) => {
   let precioacumulado=0;

    const quitarproductodecarrito = (id) => {
        const newcarrito = carrito.filter((producto) => producto.name != id);
        setcarrito(newcarrito);
    };

  
    return (
        <div>
            <ul className="list-group">
                {carrito.map((producto) => {
                    return (<><Productoseleccionado  producto={producto} quitarproductodecarrito={quitarproductodecarrito}/>
                  <span className="text-success"><strong> { precioacumulado+=parseFloat(producto.price) }</strong></span>
                    </>);
                })}
            </ul>
        </div>
    );
};
export default Carrito;
