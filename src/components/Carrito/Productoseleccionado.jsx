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
        <img src={producto.Imagen} alt="" width={50} />{" "}
        <p> name:{producto.Nombre}</p>
      </div>{" "}
      <span>
        <strong>v/u:$ {producto.PrecioVenta}</strong>
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
      {cantidad}
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
