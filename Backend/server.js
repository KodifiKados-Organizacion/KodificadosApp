import  express, { json } from "express";

import mongoose from 'mongoose';


const app = express();
app.listen(5000, () => console.log("Server running on port 5000"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

mongoose.connect('mongodb+srv://KodifiKados:KodifiK2_2022@kodifikados.yvnuqi1.mongodb.net/KodifiKados?retryWrites=true&w=majority', {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...' + err));


// esquema de registro
const RegisterSchema = mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Email: String,
    Password: String,
    Telefono: String,
    Direccion: String,
    Ciudad: String,
    Estado: String,
    CodigoPostal: String,
    FechaIngreso: String,
    Admin: Boolean,
});

// modelo de registro
const RegisterModel = mongoose.model('Registro', RegisterSchema);


app.get('/api/registers', async (req, res) => {

    const registers = await RegisterModel
        .find()
        .select({ Nombre: 1, Apellido: 1, Email: 1, Password: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    res.send(registers);
    
});

app.get('/api/registers/:id', async (req, res) => {
    const register = await RegisterModel
        .findById(req.params.id)
        .select({ Nombre: 1, Apellido: 1, Email: 1, Password: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    res.send(register);
});


app.post('/api/registers', async (req, res) => {
    const registerObject =  new RegisterModel(req.body);
    const result = await registerObject.save();
    res.send(result);
});

app.put('/api/registers/:id', async (req, res) => {
    const result = await RegisterModel.updateOne({ _id: req.params.id }, {
        $set: req.body
    });
    res.send(result);
}
);

app.delete('/api/registers/:id', async (req, res) => {
    const result = await RegisterModel.deleteOne({ _id: req.params.id });
    res.send(result);
});





