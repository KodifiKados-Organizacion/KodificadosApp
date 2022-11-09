import mongoose from 'mongoose';
const SaleSchema = mongoose.Schema({
    IdVendedor: Number,
    NombreVendedor: String,
    ApellidoVendedor: String,
    EmailVendedor: String,
    IdComprador: Number,
    NombreComprador: String,
    ApellidoComprador: String,
    EmailComprador: String,
    IdProductos: {
        NombreProducto: String,
        DescripcionProducto: String,
        PrecioProducto: Number,
        CantidadProducto: Number,
        CategoriaProducto: String,
    },
    FechaVenta: String,
    CantidadVendida: Number,
    TotalVenta: Number,
});

// modelo de Ventas
const SaleModel = mongoose.model('Venta', SaleSchema);
export{SaleModel}