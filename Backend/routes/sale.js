 import  express from "express";
 import { body, validationResult } from "express-validator";
 import { SaleModel } from "../models/sales.js";
import { getSale,getSales,createSale,deleteSale,updateSale } from "../db.js";
let RouterSale=express.Router();


RouterSale.get("/",async (req,res)=>{

   const  data =  await getSales()
      res.json(data)

}).post("/",body("").notEmpty() ,async(req,res)=>{
    const data = await createSale(req.body)
     res.json(data)

}).put("/:id",(req,res)=>{

})

export {RouterSale};