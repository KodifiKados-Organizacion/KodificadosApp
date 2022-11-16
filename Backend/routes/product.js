import express from "express";
import { ProductModel } from "../models/products.js";
import { body, validationResult } from "express-validator";
import { getProducts, createProduct, updateProduct } from "../db.js";

let Routerproducts = express.Router();

Routerproducts
  .get("/", async (req, res) => {
    const data = await getProducts();
    res.status(200).json(data);
  })
  .post("/", body("Nombre").notEmpty(), body("Precio").notEmpty(), body("PrecioVenta").notEmpty(), body("Cantidad").notEmpty(), async (req, res) => {

   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors));
      return res.status(400).json({ errors: errors.array() });
    }

     const data=await createProduct(req.body);
     res.status(200).json(data)
  })
  .put("/:id", body("Nombre").notEmpty(), body("Precio").notEmpty(), body("PrecioVenta").notEmpty(), body("Cantidad").notEmpty(), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("JSON.stringify(errors)");
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await updateProduct(req.params.id, req.body);
    res.status(200).json(data)
  }).delete("/",(req,res)=>{

    let productos= new ProductModel().find({Nombre:"Producto 1"})
    console.log(productos)
    
  });

export { Routerproducts };
