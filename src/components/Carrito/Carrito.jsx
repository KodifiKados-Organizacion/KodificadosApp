import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/Context";
import { cardInitialState, ProductReducer } from "../../hooks/reducer/ProductReducer";
import Productoseleccionado from "./Productoseleccionado";



const Carrito = ({ carrito, setcarrito }) => {
    
 const [state,dispatch]=useReducer(ProductReducer,cardInitialState)
 
     
    
   let precioacumulado=0;
   const Navigate = useNavigate();
  

    const quitarproductodecarrito = (id) => {
        const newcarrito = carrito.filter((producto) => producto._id != id);
        setcarrito(newcarrito);
    };
     const EnviaVenta=(e)=>{
        e.preventDefault();
      
        //Navigate('/Cliente/Ventas');
     }

  
    return (
        <div>
            <ul className="list-group">
              
               
                 <form onSubmit={EnviaVenta}>

                {state.card.map((producto) => {
                    return (<><Productoseleccionado   producto={producto} quitarproductodecarrito={quitarproductodecarrito}/>
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
