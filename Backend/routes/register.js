import  express from "express";
import {RegisterModel} from "../models/register.js";
import{getRegisters,createRegister, getRegister, updateRegister}from"../db.js"

 let routerRegister=express.Router();




 routerRegister.get('/',  async(req, res) => {
    const data =await getRegisters();
    res.json(data)
});

routerRegister.get('/:id', async (req, res) => {
    const data = await getRegister(req.params.id)

    res.json(data)
});



routerRegister.post('/', async (req, res) => {
     const  data =await createRegister(req.body);
     res.json(data)
});

routerRegister.put('/:id', async (req, res) => {
     const  data =await updateRegister(req.params.id, req.body)
     res.json(data)
}
);


//hacer  cambio logico !
// routerRegister.delete('/:id', async (req, res) => {
//     const result = await RegisterModel.deleteOne({ _id: req.params.id });
//     res.send(result);
// });



export  {routerRegister};