import mongoose from "mongoose";
const ObjectID = mongoose.Schema.Types.ObjectId;

/*const ProductSaleSchema = mongoose.Schema({
    Id: String,
    Producto: String,
    Cantidad: Number,
    Precio: Number,
    Total: Number,
});

// modelo de Ventas
const ProductSaleModel = mongoose.model('ProductsSale', ProductSaleSchema);
export{ProductSaleModel}*/
const ProductSaleSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectID,
      required: true,
      ref: "Registro",
    },
    ventas: [
      {
        _id: {
          type: ObjectID,
          ref: "Producto",
          required: true,
        },
        Nombre: String,
        Cantidad: {
          type: Number,
          required: true,
          min: 1,
          default: 1,
        },
        Precio: Number,
      },
    ],
    factura: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const ProductSaleModel = mongoose.model('ProductsSale', ProductSaleSchema);

export { ProductSaleModel };
