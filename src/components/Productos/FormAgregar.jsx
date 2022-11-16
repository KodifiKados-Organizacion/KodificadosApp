import React from 'react'
import {submitProduct} from "../../data/services/productsServices"

const FormAgregar = () => {


     const HandleSumbit=(e)=>{
         e.preventDefault()
       submitProduct({
        "Nombre":"Prueba de funcionamiento de api",
        "Descripcion":"Hola desde el  formulario de gregar ",
        "Precio":5222222,
        "PrevioVenta":500000,
        "Categoria":12


       })

     }
    return (
        <div>
             <form action="" onSubmit={HandleSumbit}>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="ri-shopping-bag-line"></i></span>
                <input type="text" class="form-control" placeholder="Nombre " aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="ri-sort-asc"></i></span>
                <input type="text" class="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="ri-money-dollar-circle-line"></i></span>
                <input type="text" class="form-control" placeholder="Precio" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="ri-money-dollar-circle-line"></i></span>
                <input type="text" class="form-control" placeholder="Precio Venta " aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="ri-list-ordered"></i></span>
                <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Categoria  desde base" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Imagen" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
 <button className=' btn btn-primary'>  Agregar Producto </button>
            </form>
        </div>
    )
}

export default FormAgregar