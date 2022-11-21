import express  from "express";
import { body, validationResult } from "express-validator";
import { ProductSaleModel } from "../models/productsSales.js";
import { getProductsSale,createProductSale,deleteProductSale,updateProductSale } from "../db.js";
let RouterProductSale=express.Router();

RouterProductSale


.get("/:id",async (req,res)=>{
    const  data =  await getProductSale(req.params.id)
    res.json(data)

})

.post("/",body("").notEmpty() ,async(req,res)=>{
    const data = await createProductSale(req.body)
     res.json(data)

})

.put("/:id",(req,res)=>{
        const data = updateProductSale(req.params.id,req.body)
        res.json(data)
})

.delete("/:id",async(req,res)=>{
        const data = await deleteProductSale(req.params.id)
        res.json(data)
})

export {RouterProductSale};

