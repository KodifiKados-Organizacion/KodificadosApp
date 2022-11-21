import mongoose from "mongoose";

const ProductSaleSchema = mongoose.Schema({
    Id: String,
    Producto: String,
    Cantidad: Number,
    Precio: Number,
    Total: Number,
});

// modelo de Ventas
const ProductSaleModel = mongoose.model('ProductsSale', ProductSaleSchema);
export{ProductSaleModel}
