import { useSearchParams } from "react-router-dom";

const Cards = ({ producto, setcarrito, carrito, buttom}) => {
  const [searchParams, setSearchParams] = useSearchParams();
    let newproducto = [];
    const HandleClick = () => {
        switch (buttom) {
            case "Agregar":
              setcarrito([...carrito, producto]);
                console.log(producto.id);
              break;
            case "Editar": 
                console.log(producto.id);
                if(producto !== undefined){
                    setSearchParams({"producto": producto.id});
                    console.log(searchParams);
                    window.location.href = "/Admin/EditProduct?producto=" + producto.id;
                }else{
                    console.log("no se pudo editar")
                }
                break;
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
        }
    }
    return (
      <>
        <div className="card " key={ producto._id } style={{ width: "18rem" }}>
          <img src={producto.Imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.Categoria}</h5>
            <p className="card-text">{producto.Nombre}</p>
            <p className="card-text">{producto.descripcion}</p>
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
