import express from "express";
import { body, check, validationResult } from "express-validator";
import { ProductSaleModel } from "../models/productsSales.js";
import {
  getProductsSales,
  getProductsSale,
  createProductSale,
  deleteProductSale,
  updateProductSale,
} from "../db.js";
let RouterProductSale = express.Router();

RouterProductSale.get("/", async (req, res) => {
  try {
    const data = await getProductsSales();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
})

  .post(
    "/",
    [
      check("userid", "se requiere que el usuario este registrado")
        .not()
        .notEmpty(),
      check("ventas", "no hay productos agregados").notEmpty(),
      
    ],
    async (req, res) => {
      try {
         const {Cantidad,Stock}=req.body.ventas[0];
         console.log("Cantidad"+Cantidad,"Stock"+Stock)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          console.log(JSON.stringify(errors));
          return res.status(400).json({ errors: errors.array() });
        }
        
        const data = await createProductSale(req.body);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error })
      }
    }
  )

  .put("/:id", (req, res) => {
    const data = updateProductSale(req.params.id, req.body);
    res.json(data);
  })

  .delete("/:id", async (req, res) => {
    const data = await deleteProductSale(req.params.id);
    res.json(data);
  });

export { RouterProductSale };
