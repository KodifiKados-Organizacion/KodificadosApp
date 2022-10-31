import  express from "express";
import "./db.js";
import { createRegister, getRegisters, getRegister, updateRegister, deleteRegister, createProduct, getProducts,
    getProduct, updateProduct, deleteProduct, createCategory, getCategories, getCategory, updateCategory,
    deleteCategory, createSale, getSales, getSale, deleteSale, updateSale } from "./db.js";
 

const app = express();
app.listen(5000, () => console.log("Server running on port 5000"));

// createRegister({
//     Nombre: 'Samuel',
//     Apellido: 'Rodriguez Gomez',
//     Email: 'Sam123@gmail.com',
//     Telefono: '321654987',
//     Direccion: 'Calle 64A # 113F- 23',
//     Ciudad: 'Bogota',
//     Estado: 'Activo',
//     CodigoPostal: '111031',
//     FechaIngreso: '2022-10-29',
//     Admin: true
// });

getRegisters();

// deleteRegister('635ede643457b99655a9865c')

// updateRegister('635ecd6ede7383a3df90c039', { 
//     Nombre: 'William',
//     Apellido: 'Rodriguez',
//     Email: 'williamrodriguez997@gmail.com',
//     Telefono: '3213019261',
//     Direccion: 'Calle 64A # 113F- 23',
//     Ciudad: 'Bogota',
//     Estado: 'Activo',
//     CodigoPostal: '111031',
//     FechaIngreso: '2022-10-01',
//     Admin: true
// });
