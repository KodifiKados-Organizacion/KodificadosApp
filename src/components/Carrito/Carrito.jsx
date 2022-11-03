import { useState } from "react";

const Carrito = ({ carrito, setcarrito }) => {

     const [cantidad,setcantidad]=useState(1);


    const quitarproductodecarrito = (id) => {
        const newcarrito = carrito.filter((producto) => producto.name != id);
        setcarrito(newcarrito)

    }

    const aumentarcantiad=()=>{
        setcantidad(cantidad+1)

    }
     const  disminuircantidad=()=>{
        if(cantidad>=1){
            setcantidad(cantidad-1)
        }
        alert("cantidad no disponible")
        setcantidad(1)
     }
    return <div>

        <ul className="list-group">
            {carrito.map(producto => {
                return (<li className="list-group-item d-flex justify-content-between"> <div className="d-flex"><img src={producto.urlImagen} alt="" width={50} /> <p> name:{producto.name}</p></div> <span><strong>$ {producto.price}</strong></span><button  className="border border-0 text-primary" onClick={()=>disminuircantidad()}>-</button>{cantidad}<button className="border border-0 text-primary" onClick={()=>aumentarcantiad()}>+</button>  <a className="text-danger" onClick={(e) => quitarproductodecarrito(producto.name)}>eliminar</a></li>)
            })}


        </ul>
    </div>;
};
export default Carrito;
