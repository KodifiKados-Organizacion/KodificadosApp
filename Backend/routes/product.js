import express from "express";
import { ProductModel } from "../models/products.js"
import { getProducts, createProduct, updateProduct } from "../db.js"

let Routerproducts = express.Router();

// Routerproducts.get("/",async(req,res)=>{

//   const data= await getProducts()
//   res.json(data)

// })

// Routerproducts.post("/",async(req,res)=>{

//     createProduct(req.body)

// })

// Routerproducts.put("/:id",async(req,res)=>{
//     const data=await updateProduct(req.params.id,req.body)
//     res.json(data)
// })
Routerproducts.get("/", async (req, res) => {

    const data = await getProducts()
    res.json(data)

}).post("/", async (req, res) => {

    createProduct(req.body)

}).put("/:id", async (req, res) => {

    const data = await updateProduct(req.params.id, req.body)
    res.json(data)
    
})

export { Routerproducts }