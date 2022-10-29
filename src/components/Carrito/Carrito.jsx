const Carrito = ({ carrito }) => {
    return <div>

        <ul className="list-group">
            {carrito.map(producto=>{
                return(<li className="list-group-item d-flex">{producto.name} precio{producto.price} <button className="btn btn-danger"><i class="ri-delete-bin-2-line"></i></button></li>)
            })}
            
      
        </ul>
    </div>;
  };
  export default Carrito;
  