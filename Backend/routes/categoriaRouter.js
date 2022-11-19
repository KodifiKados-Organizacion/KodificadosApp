import express from "express";

import { body, validationResult } from "express-validator";
import { createCategory,getCategory,getCategories,updateCategory,deleteCategory } from "../db.js";

let Routercategorys = express.Router();

Routercategorys
  .get("/", async (req, res) => {
    const data = await getCategories();
    res.status(200).json(data);
  })
  .post("/", body("Nombre").notEmpty(), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors));
      return res.status(400).json({ errors: errors.array() });
    }
     const data=await createCategory(req.body);
     res.status(200).json(data)
  })
  .put("/:id", body("Nombre").notEmpty(), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("JSON.stringify(errors)");
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await updateCategory(req.params.id, req.body);
    res.status(200).json(data)
  }).delete("/",(req,res)=>{

    // let productos= new ProductModel().find({Nombre:"Producto 1"})
    // console.log(productos)
    
  });

export { Routercategorys };
