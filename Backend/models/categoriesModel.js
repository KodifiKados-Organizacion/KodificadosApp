import mongoose from 'mongoose';
// esquema de Producto

const CategorySchema = mongoose.Schema({
    Nombre: String,
    Descripcion: String,
    Imagen:String,
   Estado:Boolean
});

// modelo de Producto
var CategoryModel = mongoose.model('Categoria', CategorySchema);

export{CategoryModel}