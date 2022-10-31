import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://KodifiKados:KodifiK2_2022@kodifikados.yvnuqi1.mongodb.net/KodifiKados?retryWrites=true&w=majority', {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...' + err));

const RegisterSchema = mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Email: String,
    Telefono: String,
    Direccion: String,
    Ciudad: String,
    Estado: String,
    CodigoPostal: String,
    FechaIngreso: String,
    Admin: Boolean,
});

const RegisterModel = mongoose.model('Registro', RegisterSchema);

// consultas

async function createRegister(register) {
    const registerObject = new RegisterModel(register);
    const result = await registerObject.save();
    console.log(result);
}

// createRegister({
//     Nombre: 'Juan',
//     Apellido: 'Perez',
//     Email: 'juanp@gamail.com',
//     Telefono: '123456789',
//     Direccion: 'Calle 123',
//     Ciudad: 'Ciudad de Mexico',
//     Estado: 'Activo',
//     CodigoPostal: '12345',
//     FechaIngreso: '2022-10-29',
//     Admin: true,
// });

async function getRegisters() {
    const registers = await RegisterModel
        .find()
        .select({ Nombre: 1, Apellido: 1, Email: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    console.log(registers);
}

// getRegisters();

// updateRegister('635eb2e945d11d73d6f1615a', {
//     Nombre: 'Pedro',
//     Apellido: 'Sanchez',
//     Email: 'pedros@gmail.com',
//     Telefono: '123456789',
//     Direccion: 'Calle 123',
//     Ciudad: 'Bogota',
//     Estado: 'Activo',
//     CodigoPostal: '12345',
//     FechaIngreso: '2022-10-27',
//     Admin: true,
// });

async function updateRegister(id, register) {
    const result = await RegisterModel.updateOne({ _id: id }, {
        $set: register
    });
    console.log(result);
}

async function deleteRegister(id) {
    const result = await RegisterModel.deleteOne({ _id: id });
    console.log(result);
}

// deleteRegister('635eb2e945d11d73d6f1615a');

export { createRegister, getRegisters, updateRegister, deleteRegister };
