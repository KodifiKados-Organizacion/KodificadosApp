import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { TYPES } from "../../actions/cardActions";
import { AuthContext } from "../../auth/Context";
import { createsale } from "../../data/services/saleServices";
import {
  cardInitialState,
  ProductReducer,
} from "../../hooks/reducer/ProductReducer";
import Productoseleccionado from "./Productoseleccionado";

const Carrito = ({ carrito, setcarrito }) => {
  const [state, dispatch] = useReducer(ProductReducer, cardInitialState);

  let precioacumulado = 0;
  const Navigate = useNavigate();

  const quitarproductodecarrito = (id) => {      
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CARD, payload: { _id: id } });
   
    let newcarrito = carrito.filter((producto) => producto._id !== id);

    setcarrito(newcarrito);
  };
  const EnviaVenta = async(e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const cardInfosend={
        userid:user._id,
        Nombre:user.Nombre,
        Apellido:user.Apellido,
        Email:user.Email,
        Ciudad:user.Ciudad,
        Direccion:user.Direccion,
        ventas:state.card

    }
    
    
   const data = await createsale(cardInfosend)
   alert(JSON.stringify(data))
    //Navigate('/Cliente/Ventas');
  };

  return (
    <div>
      <ul className="list-group">
        <form onSubmit={EnviaVenta}>
          {state.card.map((producto) => {
            return (
              <>
                <Productoseleccionado
                  key={producto._id}
                  producto={producto}
                  quitarproductodecarrito={quitarproductodecarrito}
                />
              
              </>
            );
          })}
          <button>Finalizar Compra</button>
        </form>
      </ul>
    </div>
  );
};
export default Carrito;
