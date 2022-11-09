import  express, { json } from "express";

import mongoose from 'mongoose';
import { Routerproducts } from "./routes/product.js";
import {routerRegister}from "./routes/register.js"


const app = express();
app.listen(5000, () => console.log("Server running on port 5000"));

//app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


app.use("/api/register",routerRegister)
app.use("/api/products",Routerproducts)
//app.use("/api/sales",)


mongoose.connect('mongodb+srv://KodifiKados:KodifiK2_2022@kodifikados.yvnuqi1.mongodb.net/KodifiKados?retryWrites=true&w=majority', {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...' + err));










