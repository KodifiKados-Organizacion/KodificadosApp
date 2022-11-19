import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../auth/Context";

const Productoseleccionado = ({ producto ,quitarproductodecarrito}) => {
  const { products } = useContext(AuthContext);
  const [cantidad, setcantidad] = useState(1);
  const aumentarcantiad = () => {
    setcantidad(cantidad + 1);
  };
  const disminuircantidad = () => {
    if (cantidad <=1) {

      alert("La cantidad Minima es uno");
        setcantidad(1);
      
    }else{
      setcantidad(cantidad - 1);  
    }
    
  };
   products(producto, cantidad)

  return (
    <li className="list-group-item d-flex justify-content-between">
      {" "}
      <div className="d-flex">
        <img src={producto.Imagen} alt="" width={50} />{" "}
        <div><p> Nombre :{producto.Nombre}</p>
        <p className="text-secondary"> <small>Cantidad Disponible({producto.Cantidad})</small></p>
        
        <small className="text-secondary">precio unitario:$ {producto.PrecioVenta}</small>
        </div>
        
        
      </div>{" "}
      <span>
        
        
        <p>v/t:{producto.PrecioVenta*cantidad}</p>
      </span>
      <button
        className="border border-0 text-primary"
        onClick={(e) => {
          e.preventDefault()
          disminuircantidad()}}
      >
        -
      </button>
      <input type="text"  value={cantidad} className="border border-0"/>
      <button
        className="border border-0 text-primary"
        onClick={(e) => {
          e.preventDefault()
          aumentarcantiad()}}
      >
        +
      </button>{" "}
      <a
        className="text-danger"
        onClick={(e) => quitarproductodecarrito(producto._id)}
      >
        eliminar
      </a>
    </li>
  );
};

export default Productoseleccionado;
