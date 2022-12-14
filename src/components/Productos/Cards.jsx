import { useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { TYPES } from "../../actions/cardActions";
import { cardInitialState, ProductReducer } from "../../hooks/reducer/ProductReducer";
 import { updateProduct } from "../../data/services/productsServices.js";

const Cards = ({ producto, setcarrito, carrito, buttom}) => {
  const [searchParams, setSearchParams] = useSearchParams();
   const [state,dispatch]=useReducer(ProductReducer,cardInitialState)
    //let newproducto = [];
    const HandleClick = () => {
        switch (buttom) {
            case "Agregar":
              if(carrito.includes(producto))return alert("Tu producto ya fue agregado, modifica la cantidad desde el carrito..")
              setcarrito([...carrito, producto]);
              dispatch({type:TYPES.ADD_TO_CARD,payload:producto})
             
          
              break;
            case "Editar": 
          
                if(producto !== undefined){
                    setSearchParams({"producto": producto});
                    console.log(searchParams);
                    window.location.href = "/Admin/EditProduct?producto=" + producto._id;
                }else{
                    console.log("no se pudo editar")
                }
                break;
                default:
                  console.log("no asignado");
        }
    }

    const HandleDelete =() => {
        switch (buttom) {
            case "Agregar":
                console.log("no se puede eliminar")
                break;
            case "Editar":
                console.log("eliminando");
                alert("eliminando producto "+ producto.id); 
                break;
                default:
                  console.log("no asignado");
        }
    }
    return (
      <>
        <div className="card " key={ producto._id } style={{ width: "18rem" }}>
          <img src={producto.Imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.Categoria}</h5>
            <p className="card-text">{producto.Nombre}</p>
            <p className="card-text">{producto.Descripcion}</p>
            <p className="card-text text-success">{producto.PrecioVenta}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary"
              onClick={HandleClick}
            >
              <span> {buttom === "Agregar" ? <i className="ri-shopping-cart-fill" ></i> : <ion-icon name="pencil-outline"></ion-icon> }</span>
                
              
               <small>{ buttom }</small>
            </button>
            <button onClick={ HandleDelete } className="btn btn-danger">
              <i className="ri-delete-bin-line"></i> <small>Quitar</small>
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Cards;
