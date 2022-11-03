import { useState } from "react";

const Productoseleccionado = ({ producto ,quitarproductodecarrito}) => {
  const [cantidad, setcantidad] = useState(1);
  const aumentarcantiad = () => {
    setcantidad(cantidad + 1);
  };
  const disminuircantidad = () => {
    if (cantidad >= 1) {
      setcantidad(cantidad - 1);
    }else{
        alert("La cantidad Minima es uno");
        setcantidad(1);
    }
    
  };


  return (
    <li className="list-group-item d-flex justify-content-between">
      {" "}
      <div className="d-flex">
        <img src={producto.urlImagen} alt="" width={50} />{" "}
        <p> name:{producto.name}</p>
      </div>{" "}
      <span>
        <strong>v/u:$ {producto.price}</strong>
        <p>v/t:{producto.price*cantidad}</p>
      </span>
      <button
        className="border border-0 text-primary"
        onClick={() => disminuircantidad()}
      >
        -
      </button>
      {cantidad}
      <button
        className="border border-0 text-primary"
        onClick={() => aumentarcantiad()}
      >
        +
      </button>{" "}
      <a
        className="text-danger"
        onClick={(e) => quitarproductodecarrito(producto.name)}
      >
        eliminar
      </a>
    </li>
  );
};

export default Productoseleccionado;
