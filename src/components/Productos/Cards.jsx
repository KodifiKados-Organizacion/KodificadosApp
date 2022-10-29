const Cards = ({ producto, setcarrito, carrito }) => {
    let newproducto = [];
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={producto.urlImagen} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.category}</h5>
            <p className="card-text">{producto.name}</p>
            <p className="card-text">{producto.descripcion}</p>
            <p className="card-text text-success">{producto.price}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-primary"
              onClick={() => setcarrito([...carrito, producto])}
            >
              <i className="ri-shopping-cart-line"></i> <small>agregar</small>
            </button>
            <a href="#" className="btn btn-danger">
              <i className="ri-delete-bin-line"></i> <small>Quitar</small>
            </a>
          </div>
        </div>
      </>
    );
  };
  
  export default Cards;
  