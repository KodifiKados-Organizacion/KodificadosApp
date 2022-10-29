import { PRODUCTS } from "../../data/products";
import React from 'react'
import { useForm } from "../../hooks/useForm";
import { useSearchParams } from 'react-router-dom';
import '../../styles/components/EditProducts.css'

export const EditProduc = (producto) => {
    const [searchParams ] = useSearchParams();
    console.log(searchParams.getAll("producto"));
    let id = searchParams.getAll("producto");
    let productoEdit = PRODUCTS.find((producto) => producto.id == id);
    console.log(productoEdit);
    const [valuesEdit, handleInputChange] = useForm({
        name: productoEdit.name,
        price:  productoEdit.price,
        descripcion: productoEdit.description,
        urlImagen: productoEdit.urlImagen,
    });
    const { name,  price, descripcion, urlImagen } = valuesEdit;
    const HandleClick = (e) => {
        e.preventDefault();
        console.log(valuesEdit);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleBack = (e) => {
        e.preventDefault();
        window.history.back();
    }
  return (
    <div className="producto-edit" key={productoEdit.id}>
      <form onChange={ handleSubmit } className="form-edit">
      <span className="container_img_edit">
      <img src={productoEdit.urlImagen} alt={productoEdit.name} />
      <input 
      type="text" 
      name="urlimage" 
      value={urlImagen} 
      placeholder={productoEdit.urlImagen}
      onChange={handleInputChange}
      />
      </span>
      <div className="container-info-edit">
        <input 
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder={productoEdit.nombre}
        />
        <input 
        type="text"
        name="descripcion"
        value={descripcion}
        onChange={handleInputChange}
        placeholder={productoEdit.description}
        />
        <input 
        type="text"
        name="price"
        value={price}
        onChange={handleInputChange}
        placeholder={productoEdit.price}
        />
        </div>
        <span className="container-buttons-edit">
        <button 
        className="btn btn-primary"
        onClick={HandleClick}
        >
          Guardar
          </button>

        <button 
        className="btn btn-info"
        onClick={handleBack}
        >
          Cancelar
          </button>
        </span>
        </form>
    </div>
  )
}
