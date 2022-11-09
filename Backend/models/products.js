import mongoose from 'mongoose';
// esquema de Producto

const ProductSchema = mongoose.Schema({
    Nombre: String,
    Descripcion: String,
    Precio: Number,
    PrecioVenta: Number,
    Cantidad: Number,
    Categoria: String,
    Imagen: String,
    FechaIngreso: String,
});

// modelo de Producto
var ProductModel = mongoose.model('Producto', ProductSchema);

export{ProductModel}