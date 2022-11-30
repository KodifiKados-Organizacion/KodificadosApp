import express from "express";
import { check, validationResult } from "express-validator";
import { RegisterModel } from "../models/register.js";
import { getRegisters, createRegister, getRegisterByEmail, getRegister, updateRegister } from "../db.js"

let routerRegister = express.Router();




routerRegister.get('/', async (req, res) => {
     const data = await getRegisters();
     res.json(data)
}).post('/:id', async (req, res) => {

     const id = req.params.id;
     const data = await getRegister(id);

     res.json(data)
}).post('/Login', [
     check('Email', 'Email incorrecto').isEmail(),
     check('Password', 'Password incorrecto').isLength({ min: 6 })
], async (req, res) => {
     const { Email, Password } = req.body;
     console.log(Email, Password);
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
     }
     const data = await getRegisterByEmail(Email);
     if (data.length == 0) {
          return res.status(400).json({
               errors: errors.array(),
               msg: 'El usuario no existe'
          });
     }
     if (data[0].Password != Password) {
          return res.status(400).json({
               errors: errors.array(),
               msg: 'Password incorrecto'
          });
     }
     res.status(202).json(
          {
               ok: true,
               msg: "Login correcto",
               data
          });

}).post('/newuser', (req, res) => {


     console.log(req.body);
     // const errors = validationResult(req);
     // if (!errors.isEmpty()) {
     //      return res.status(400).json({ errors: errors.array() });
     // }

     // const data = await createRegister(req.body);
     // res.status(201).json(data)
}).put('/:id', async (req, res) => {
     const data = await updateRegister(req.params.id, req.body)
     res.json(data)
}
);










//hacer  cambio logico !
// routerRegister.delete('/:id', async (req, res) => {
//     const result = await RegisterModel.deleteOne({ _id: req.params.id });
//     res.send(result);
// });



export { routerRegister };