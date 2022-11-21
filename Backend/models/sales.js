import mongoose from 'mongoose';
const SaleSchema = mongoose.Schema({
    NombreVendedor: String,
    ApellidoVendedor: String,
    EmailVendedor: String,
    NombreCliente: String,
    ApellidoCliente: String,
    EmailCliente: String,
    TelCliente: String,
    DirCliente: String,
    CiudadCompra: String,
    FechaVenta: String,
    CantidadVendida: Number,
    TotalVenta: Number,
});

// modelo de Ventas
const SaleModel = mongoose.model('Venta', SaleSchema);
export{SaleModel}

