 import  express from "express";
 import { body, check, validationResult } from "express-validator";
 import { SaleModel } from "../models/sales.js";
import { getSale,getSales,createSale,deleteSale,updateSale } from "../db.js";
let RouterSale=express.Router();




RouterSale.get("/",async (req,res)=>{

   const  data =  await getSales()
      res.json(data)

})

RouterSale.get("/:id",async (req,res)=>{
    const  data =  await getSale(req.params.id)
    res.json(data)

})

RouterSale.post("/NewSale",[
      check('NombreVendedor', 'Nombre es obligatorio').not().notEmpty(),
      check('ApellidoVendedor', 'Apellido es obligatorio').notEmpty(),
      check('EmailVendedor', 'Email es obligatorio').isEmail(),
      check('NombreCliente', 'Nombre es obligatorio').not().notEmpty(),
      check('ApellidoCliente', 'Apellido es obligatorio').notEmpty(),
      check('EmailCliente', 'Email es obligatorio').isEmail(),
      check('TelCliente', 'Telefono es obligatorio').notEmpty(),
      check('DirCliente', 'Direccion es obligatorio').notEmpty(),
      check('CiudadCompra', 'Ciudad es obligatorio').notEmpty(),
      check('FechaVenta', 'Fecha es obligatorio').notEmpty(),
      check('CantidadVendida', 'Cantidad es obligatorio').notEmpty(),
      check('TotalVenta', 'Total es obligatorio').notEmpty()      
],async(req,res)=>{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
             return res.status(400).json({ errors: errors.array() });
      }
    const data = await createSale(req.body)
    if(data){
            res.status(201).json({ok:true,msg:"Venta creada",data})
      }else{
            res.status(400).json({ok:false,msg:"Error al crear venta"})
      }
})

RouterSale.put("/:id",(req,res)=>{
      const data = updateSale(req.params.id,req.body)
      res.json(data)
})
 

RouterSale.delete("/:id",async(req,res)=>{
      const data = await deleteSale(req.params.id)
      res.json(data)
   })

export {RouterSale};