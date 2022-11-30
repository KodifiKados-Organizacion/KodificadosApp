import { PRODUCTS } from "../../data/products";
import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useSearchParams } from "react-router-dom";
import "../../styles/components/EditProducts.css";
import {
  getProductoFindId,
  updateProduct,
} from "../../data/services/productsServices.js";

export const EditProduc = (producto) => {
  const [searchParams] = useSearchParams();
  let id = searchParams.getAll("producto");
  const [productoEdit, setProductoEdit] = useState({});

  const getDataInfoProduct = async () => {
    const data = await getProductoFindId(id);
    setProductoEdit(data);
  };
  useEffect(() => {
    getDataInfoProduct();
  }, []);

  const [valuesEdit, handleInputChange] = useForm({
    Nombre: productoEdit.Nombre,
    Precio: productoEdit.Precio,
    PrecioVenta: productoEdit.PrecioVenta,
    Descripcion: productoEdit.Descripcion,
    Imagen: productoEdit.Imagen,
    _id:id
  });
  const { Nombre, Precio, PrecioVenta, Descripcion, Imagen, Stock } =
    valuesEdit;
const _id=id;
  const HandleClick = (e) => {
    e.preventDefault();

    // if(valuesEdit.length===0){
    //   alert("No hay cambios por realizar")
    //   window.history.back();

    // }
    updateProduct(valuesEdit);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className="container " key={productoEdit._id}>
      {JSON.stringify(id)}
      <form onChange={handleSubmit} className="form-control mx-0">
        <span className="card">
          <img src={productoEdit.Imagen} width="100" alt={productoEdit.Nombre} />
          <input
            type="text"
            name="Imagen"
            value={Imagen}
            placeholder={productoEdit.Imagen}
            onChange={handleInputChange}
          />
        </span>
       <input
       type="hidden"
       name="_id"
       value={_id}

       />

        <div className="form-group">
          <input
            type="text"
            name="Nombre"
            value={Nombre}
            onChange={handleInputChange}
            placeholder={productoEdit.Nombre}
          />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="Stock"
              value={Stock}
              onChange={handleInputChange}
              placeholder={productoEdit.Stock}
            />
          </div>
           <div className="form-group">
          <input
            type="text"
            name="Descripcion"
            value={Descripcion}
            onChange={handleInputChange}
            placeholder={productoEdit.Descripcion}
          />
          </div>
          <div className="form-group">
          <input
            type="text"
            name="Precio"
            value={Precio}
            onChange={handleInputChange}
            placeholder={productoEdit.Precio}
          />
        </div>
        
      <div className="form-group">
      <input
            type="text"
            name="PrecioVenta"
            value={PrecioVenta}
            onChange={handleInputChange}
            placeholder={productoEdit.PrecioVenta}
          />
      </div>
          
     
        <span className="container-buttons-edit">
          <button className="btn btn-primary" onClick={HandleClick}>
            Guardar
          </button>

          <button className="btn btn-info" onClick={handleBack}>
            Cancelar
          </button>
        </span>
      </form>
    </div>
  );
};
