import mongoose from 'mongoose';

//body-parser
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
var RegisterModel=mongoose.model('registros', RegisterSchema);
export {RegisterModel} ;