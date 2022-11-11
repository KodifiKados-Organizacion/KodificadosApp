import express from "express";
import { ProductModel } from "../models/products.js";
import { body, validationResult } from "express-validator";
import { getProducts, createProduct, updateProduct } from "../db.js";

let Routerproducts = express.Router();

Routerproducts
.get("/", async (req, res) => {
  const data = await getProducts();
  res.json(data);
})
.post("/", body("Nombre").notEmpty(), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("JSON.stringify(errors)");
      return res.status(400).json({ errors: errors.array() });
    }

    createProduct(req.body);
  })
  .put("/:id", async (req, res) => {
    const data = await updateProduct(req.params.id, req.body);
    res.json(data);
  });

export { Routerproducts };
