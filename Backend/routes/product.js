import express from "express";
import { ProductModel } from "../models/products.js";
import { body, validationResult } from "express-validator";
import { getProducts, createProduct, updateProduct } from "../db.js";

let Routerproducts = express.Router();

Routerproducts.get("/", async (req, res) => {
  try {
    const data = await getProducts();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
})
  .post(
    "/",
    body("Nombre").notEmpty(),
    body("Precio").notEmpty(),
    body("PrecioVenta").notEmpty(),
    body("Cantidad").notEmpty(),
    async (req, res) => {
      try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log(JSON.stringify(errors));
          return res.status(400).json({ errors: errors.array() });
        }

        const data = await createProduct(req.body);
        console.log(JSON.stringify(data));
        res.status(201).json(data);
      } catch (error) {
        res.status(400).send(error);
      }
    }
  )
  .put(
    "/update",
    body("Nombre").notEmpty(),
    body("Precio").notEmpty(),
    body("PrecioVenta").notEmpty(),
    body("Cantidad").notEmpty(),
    async (req, res) => {
      const id = req.body._id;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log("JSON.stringify(errors)");
        return res.status(400).json({ errors: errors.array() });
      }
      const data = await updateProduct(id, req.body);
      res.status(200).json(data);
    }
  )
  .delete("/delete", (req, res) => {
    const id = req.body._id;
    let productos = new ProductModel().find({ _id: id});
    console.log(productos);
  });

export { Routerproducts };
