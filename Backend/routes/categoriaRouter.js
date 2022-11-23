import express from "express";

import { body, check, validationResult } from "express-validator";
import { createCategory,getCategory,getCategories,updateCategory,deleteCategory,getCategoryforName } from "../db.js";

let Routercategorys = express.Router();

Routercategorys
  .get("/", async (req, res) => {
    const data = await getCategories();
    res.status(200).json(data);
  })
  .post("/",[check("Nombre","El Nombre de la Categoria  es Requerido").notEmpty()], async (req, res) => {
  const  category=await getCategoryforName(req.body.Nombre)
  if(category){
    return res.status(400).json({ errors: "La categoria  "+category.Nombre+" Ya Existe" });
  }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(JSON.stringify(errors));
      return res.status(400).json({ errors: errors.array() });
    }
     const data=await createCategory(req.body);
     res.status(200).json(data)
  })
  .put("/:id", [check("Nombre","El Nombre de la Categoria  es Requerido").notEmpty()], async (req, res) => {

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
