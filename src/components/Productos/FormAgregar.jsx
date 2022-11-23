import React from "react";
import { useEffect } from "react";
import { submitProduct } from "../../data/services/productsServices";
import { getCategoriesAll } from "../../data/services/categoryServices.js";
import { useState } from "react";
import { Navigate } from "react-router";

const FormAgregar = () => {
  const [categorias, setcategorias] = useState([]);
  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [precio, setPrecio] = useState();
  const [precioVenta, setPrecioVenta] = useState();
  const [stock, setstock] = useState();
  const [cantidad, setCantidad] = useState(1);
  const [categoria, setCategoria] = useState();
  const [imagen, setimagen] = useState();
  const [errors, seterrors] = useState([]);

  const getDatacategories = async () => {
    const data = await fetch("http://localhost:5000/api/categorys");
    const resp = await data.json();
    setcategorias(resp);
  };

  useEffect(() => {
    getDatacategories();
  }, []);

  const HandleSumbit = async (e) => {
    e.preventDefault();

    if (nombre === "" || nombre === undefined) {
      alert("Ingresa el nombre del equipo");
      return;
    }
    if (precio === "" || precio === undefined) {
      alert("Debe agregar el precio del producto");
      return;
    }

    if (precioVenta === "" || precioVenta === undefined) {
      alert("Debe agregar el precio  de  venta del producto");
      return;
    }

    if (stock === "" || stock === undefined) {
      alert("agrega la cantidad en stock");
      return;
    }
    if (categoria === "" || categoria === undefined) {
      alert("Debes seleccionar la categoria ");
      return;
    }

    const resp = await submitProduct({
      Nombre: nombre,
      Descripcion: descripcion,
      Precio: precio,
      PrecioVenta: precioVenta,
      Stock: stock,
      Cantidad:cantidad,
      Categoria: categoria,
      Imagen: imagen,
    });

    if (resp.errors) {
      alert(JSON.stringify(resp.errors));
      return;
    }
    alert("Producto " + resp.Nombre + " Agregado correctamente..");
    Navigate('/Admin');
  };
  return (
    <div>
      <form action="" className="container" onSubmit={HandleSumbit}>
        <h2>Productos</h2>
        <div className="row">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="ri-shopping-bag-line"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre "
              onChange={(e) => setNombre(e.target.value)}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="ri-slideshow-line"></i>
          </span>
          <textarea
            type="text"
            className="form-control"
            placeholder="Descripcion"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="ri-money-dollar-circle-line"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Precio"
                aria-label="Username"
                onChange={(e) => setPrecio(e.target.value)}
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="ri-money-dollar-circle-line"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Precio Venta "
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setPrecioVenta(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="ri-list-ordered"></i>
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Cantidad en stock"
                onChange={(e) => setstock(e.target.value)}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="ri-list-unordered"></i>
          </span>
          <select
            name=""
            id=""
            className="form-control"
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">[ Selecciona Categoria ]</option>
            {categorias.map((categoria) => {
              return <option value={categoria._id}>{categoria.Nombre}</option>;
            })}
          </select>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="ri-links-line"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Imagen"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setimagen(e.target.value)}
          />
        </div>

        <button className=" btn btn-primary"> Agregar Producto </button>
      </form>

      {errors.length > 0
        ? errors.map((error) => {
            return (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default FormAgregar;
