import { PRODUCTS } from "./../../data/products";
import "../../styles/components/cards.css";
import Cards from "./Cards";
import Carrito from "../Carrito/Carrito";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Listacategorias from "../Categoria/Listacategorias";

const Lista = (props) => {
  const [carrito, setcarrito] = useState([]);
  const [productos, setproductos] = useState([]);
  const [productos_carro, setproductoscarro] = useState([]);

  const getProducts = async () => {
    const data = await fetch("http://localhost:5000/api/products");
    const resp = await data.json();

    setproductos(resp);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <nav className="nav">
        {props.buttom === "Agregar" ? (
          <>
            <button
              type="button"
              className="btn btn-primary position-relative"
              data-bs-toggle="modal"
              data-bs-target="#carrito"
            >
              {carrito.length}
              <i className="ri-shopping-cart-fill"></i>
            </button>
          </>
        ) : (
          <Link to="Ventas" className="btn btn-info">
            {" "}
            <ion-icon name="cash-outline"></ion-icon>{" "}
          </Link>
        )}
      </nav>

      {/* AFMT */}
      <h1>Catalogo</h1>
     
      <a href="Admin/AgregarProducto">Agregar</a>

      {/*<main>
        <h1>Productos</h1>
        <div className="products">
        {PRODUCTS.map(product => (
        <div className="product" key={product._id}>
          <a href={`/product/${product.slug}`}>
          <img src={product.Imagen} alt={product.name} />
          </a>
          <div className="product-info">
          <a href={`/product/${product.slug}`}>
          <p>
            {product.Nombre}
          </p>
          </a>
          <p>
            <strong>${product.Precio}</strong>
          </p>
          <button>Agregar al carrito</button>
          </div>
        </div>
        ))
        }
        </div>
      </main>*/}
      {/* AFMT */}

      <div className="container-products">
        {productos.map((producto) => (
          <Cards
            key={productos._id}
            producto={producto}
            setcarrito={setcarrito}
            carrito={carrito}
            buttom={props.buttom}
          />
        ))}
      </div>

      <div
        className="modal fade w1"
        id="carrito"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-header text-primary">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Tu Carrito
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
                <Carrito carrito={carrito} setcarrito={setcarrito} />
              ) : (
                <span className="text-danger">
                  No hay productos en el carrito
                </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lista;
