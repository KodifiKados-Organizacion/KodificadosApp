import  express, { json } from "express";

import mongoose from 'mongoose';
 import cors from "cors"
import { Routerproducts } from "./routes/productRouter.js";
import {routerRegister}from "./routes/register.js"
import { RouterSale } from "./routes/sale.js";
import { Routercategorys } from "./routes/categoriaRouter.js";
import { RouterProductSale } from "./routes/productsSales.js";

const port=5000;
const app = express();
app.listen(port, () => console.log("Server running on port "+port));
app.use(cors())
app.use(express.json());
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
app.use("/api/categorys",Routercategorys)
app.use("/api/sales",RouterSale)
app.use("/api/productsSales",RouterProductSale)


mongoose.connect('mongodb+srv://KodifiKados:KodifiK2_2022@kodifikados.yvnuqi1.mongodb.net/KodifiKados?retryWrites=true&w=majority', {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...' + err));






