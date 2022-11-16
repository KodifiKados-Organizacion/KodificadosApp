import mongoose from 'mongoose';



//Modelos  de datos 

import { ProductModel } from './models/products.js'
import { RegisterModel } from './models/register.js'
import { SaleModel } from "./models/sales.js"
 import { CategoryModel } from "./models/categoriesModel.js";




// consultas


// metodo para crear un registro
async function createRegister(register) {
    const registerObject = new RegisterModel(register);
    const result = await registerObject.save();
    return result;
}



//Metodo para obtener todos los registros
async function getRegisters() {
    const registers = await RegisterModel
        .find()
        .select({ Nombre: 1, Apellido: 1, Email: 1, Password: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    return registers;
}

// metodo para obtener un registro
async function getRegister(id) {
    const register = await RegisterModel
        .findById(id)
        .select({ Nombre: 1, Apellido: 1, Email: 1, Password: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    return register;
}

// metodo para actualizar un registro
async function updateRegister(id, register) {
    const result = await RegisterModel.updateOne({ _id: id }, {
        $set: register
    });
    return result;
}
//metodo para eliminar un registro
async function deleteRegister(id) {
    const result = await RegisterModel.deleteOne({ _id: id });
    return result;
}

// Exports Functiuons Register
export { createRegister, getRegisters, getRegister, updateRegister, deleteRegister };

// consultas
// metodo para crear un Producto
async function createProduct(product) {
    const productObject = new ProductModel(product);
    const result = await productObject.save();
    return result;
}

//Metodo para obtener todos los Productos
async function getProducts() {
    const products = await ProductModel
        .find()
        .select({ Nombre: 1, Descripcion: 1, Precio: 1, PrecioVenta: 1, Cantidad: 1, Categoria: 1, Imagen: 1, FechaIngreso: 1, });
    return products;
}

// metodo para obtener un Producto
async function getProduct(id) {
    const product = await ProductModel
        .find({ _id: id })
    return product
}

// metodo para actualizar un Producto
async function updateProduct(id, product) {
     const result = await ProductModel.updateOne({_id:id}, {
         $set: product
     });
   
    return result
}
//metodo para eliminar un Producto
async function deleteProduct(id) {
    const result = await ProductModel.deleteOne({ _id: id });
    console.log(result);
}

// Exports Functiuons Product
export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };

// esquema de Categoria


// consultas
// metodo para crear un Categoria
async function createCategory(category) {
    const categoryObject = new CategoryModel(category);
    const result = await categoryObject.save();
    return result;
}



//Metodo para obtener todos las Categorias
async function getCategories() {
    const categories = await CategoryModel
        .find()
        .select({ Nombre: 1, Descripcion: 1, Imagen: 1 });
    return categories;
}

// metodo para obtener una Categoria
async function getCategory(id) {
    const category = await CategoryModel
        .find({ _id: id })
    return category;
}

// metodo para actualizar un Categoria
async function updateCategory(id, category) {
    const result = await CategoryModel.updateOne({ _id: id }, {
        $set: category
    });
    return result;
}
//metodo para eliminar un Categoria
async function deleteCategory(id) {
    const result = await CategoryModel.deleteOne({ _id: id });
    return result;
}

// Exports Functiuons Category
export { createCategory, getCategories, getCategory, updateCategory, deleteCategory };

// consultas
// metodo para crear un Venta
async function createSale(sale) {
    const saleObject = new SaleModel(sale);
    const result = await saleObject.save();
    return result;
}

//Metodo para obtener todos las Ventas
async function getSales() {
    const sales = await SaleModel
        .find()
        .select({ IdVendedor: 1, NombreVendedor: 1, ApellidoVendedor: 1, EmailVendedor: 1, IdComprador: 1, NombreComprador: 1, ApellidoComprador: 1, EmailComprador: 1, IdProductos: 1, FechaVenta: 1, CantidadVendida: 1, TotalVenta: 1 });
return sales
}

//metodo para obtener una Venta
async function getSale(id) {
    const sale = await SaleModel
        .find({ _id: id })
        .select({ IdVendedor: 1, NombreVendedor: 1, ApellidoVendedor: 1, EmailVendedor: 1, IdComprador: 1, NombreComprador: 1, ApellidoComprador: 1, EmailComprador: 1, IdProductos: 1, FechaVenta: 1, CantidadVendida: 1, TotalVenta: 1 });
    return sale
}

// metodo para actualizar un Venta
async function updateSale(id, sale) {
    const result = await SaleModel.updateOne({ _id: id }, {
        $set: sale
    });
    return result
}
//metodo para eliminar un Venta
async function deleteSale(id) {
    const result = await SaleModel.deleteOne({ _id: id });
    return result;
}

// Exports Functiuons Sale
export { createSale, getSales, getSale, updateSale, deleteSale };


