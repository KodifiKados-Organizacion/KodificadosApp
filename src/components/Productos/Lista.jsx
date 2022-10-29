import { PRODUCTS } from "./../../data/products";
import "../../styles/components/cards.css";
import Cards from "./Cards";
import Carrito from "../Carrito/Carrito";
import { useState } from "react";
import { Link } from "react-router-dom";

const Lista = (props) => {
  const [carrito, setcarrito] = useState([]);
  const [productos_carro, setproductoscarro] = useState([]);
  return (
    <div>
      <nav className="nav">
        {props.buttom === "Agregar" ? 
        <button
          type="button"
          className="btn btn-primary position-relative"
          data-bs-toggle="modal"
          data-bs-target="#carrito"
        >
          {carrito.length}
          <i className="ri-shopping-cart-fill"></i>
        </button>: <Link to='Ventas' className="btn btn-info"> <ion-icon name="cash-outline"></ion-icon> </Link>  }
      </nav>
      <h1>Catalogo</h1>

      <div className="container-products">
        {PRODUCTS.map((producto) => (
          <Cards
            producto={producto}
            setcarrito={setcarrito}
            carrito={carrito}
            key={producto.name}
            buttom = {props.buttom}
          />
        ))}
      </div>

      <div
        className="modal fade"
        id="carrito"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Lista de compras
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {carrito.length > 0 ? (
                <Carrito carrito={carrito} />
              ) : (
                <span>No hay productos en el carrito</span>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lista;