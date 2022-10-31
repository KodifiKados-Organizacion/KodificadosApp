import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://KodifiKados:KodifiK2_2022@kodifikados.yvnuqi1.mongodb.net/KodifiKados?retryWrites=true&w=majority', {})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...' + err));


// esquema de registro
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

// modelo de registro
const RegisterModel = mongoose.model('Registro', RegisterSchema);

// consultas
// metodo para crear un registro
async function createRegister(register) {
    const registerObject =  new RegisterModel(register);
    const result = await registerObject.save();
    console.log(result);
}

//Metodo para obtener todos los registros
async function getRegisters() {
    const registers = await RegisterModel
        .find()
        .select({ Nombre: 1, Apellido: 1, Email: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    console.log(registers);
}

// metodo para obtener un registro
async function getRegister(id) {
    const register = await RegisterModel
        .findById(id)
        .select({ Nombre: 1, Apellido: 1, Email: 1, Telefono: 1, Direccion: 1, Ciudad: 1, Estado: 1, CodigoPostal: 1, FechaIngreso: 1, Admin: 1 });
    console.log(register);
}

// metodo para actualizar un registro
async function updateRegister(id, register) {
    const result = await RegisterModel.updateOne({ _id: id }, {
        $set: register
    });
    console.log(result);
}
//metodo para eliminar un registro
async function deleteRegister(id) {
    const result = await RegisterModel.deleteOne({ _id: id });
    console.log(result);
}

// Exports Functiuons Register
export { createRegister, getRegisters, getRegister, updateRegister, deleteRegister };


// esquema de Producto

const ProductSchema = mongoose.Schema({
    Nombre: String,
    Descripcion: String,
    Precio: Number,
    Cantidad: Number,
    Categoria: String,
    Imagen: String,
    Estado: String,
    FechaIngreso: String,
    FechaVenta: String,
    CantidadVendida: Number,
    IdVendedor: Number,
    NombreVendedor: String,
    ApellidoVendedor: String,
    EmailVendedor: String,
    IdComprador: Number,
    NombreComprador: String,
    ApellidoComprador: String,
    EmailComprador: String,
});

// modelo de Producto
const ProductModel = mongoose.model('Producto', ProductSchema);

// consultas
// metodo para crear un Producto
async function createProduct(product) {
    const productObject =  new ProductModel(product);
    const result = await productObject.save();
    console.log(result);
}

//Metodo para obtener todos los Productos
async function getProducts() {
    const products = await ProductModel
        .find()
        .select({ Nombre: 1, Descripcion: 1, Precio: 1, Cantidad: 1, Categoria: 1, Imagen: 1, Estado: 1, FechaIngreso: 1, FechaVenta: 1, CantidadVendida: 1, IdVendedor: 1, NombreVendedor: 1, ApellidoVendedor: 1, EmailVendedor: 1, IdComprador: 1, NombreComprador: 1, ApellidoComprador: 1, EmailComprador: 1 });
    console.log(products);
}

// metodo para obtener un Producto
async function getProduct(id) {
    const product = await ProductModel
        .find({ _id: id })  
        console.log(product);
}

// metodo para actualizar un Producto
async function updateProduct(id, product) {
    const result = await ProductModel.updateOne({ _id: id }, {
        $set: product
    });
    console.log(result);
}
//metodo para eliminar un Producto
async function deleteProduct(id) {
    const result = await ProductModel.deleteOne({ _id: id });
    console.log(result);
}

// Exports Functiuons Product
export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };

// esquema de Categoria

const CategorySchema = mongoose.Schema({
    Nombre: String,
    Descripcion: String,
    Imagen: String,
});

// modelo de Categoria
const CategoryModel = mongoose.model('Categoria', CategorySchema);

// consultas
// metodo para crear un Categoria
async function createCategory(category) {
    const categoryObject =  new CategoryModel(category);
    const result = await categoryObject.save();
    console.log(result);
}

//Metodo para obtener todos las Categorias
async function getCategories() {
    const categories = await CategoryModel
        .find()
        .select({ Nombre: 1, Descripcion: 1, Imagen: 1 });
    console.log(categories);
}

// metodo para obtener una Categoria
async function getCategory(id) {
    const category = await CategoryModel
        .find({ _id: id })
        console.log(category);
}

// metodo para actualizar un Categoria
async function updateCategory(id, category) {
    const result = await CategoryModel.updateOne({ _id: id }, {
        $set: category
    });
    console.log(result);
}
//metodo para eliminar un Categoria
async function deleteCategory(id) {
    const result = await CategoryModel.deleteOne({ _id: id });
    console.log(result);
}

// Exports Functiuons Category
export { createCategory, getCategories, getCategory, updateCategory, deleteCategory };

// esquema de Ventas

const SaleSchema = mongoose.Schema({
    IdVendedor: Number,
    NombreVendedor: String,
    ApellidoVendedor: String,
    EmailVendedor: String,
    IdComprador: Number,
    NombreComprador: String,
    ApellidoComprador: String,
    EmailComprador: String,
    IdProductos: {
        NombreProducto: String,
        DescripcionProducto: String,
        PrecioProducto: Number,
        CantidadProducto: Number,
        CategoriaProducto: String,
    },
    FechaVenta: String,
    CantidadVendida: Number,
    TotalVenta: Number,
});

// modelo de Ventas
const SaleModel = mongoose.model('Venta', SaleSchema);

// consultas
// metodo para crear un Venta
async function createSale(sale) {
    const saleObject =  new SaleModel(sale);
    const result = await saleObject.save();
    console.log(result);
}

//Metodo para obtener todos las Ventas
async function getSales() {
    const sales = await SaleModel
        .find()
        .select({ IdVendedor: 1, NombreVendedor: 1, ApellidoVendedor: 1, EmailVendedor: 1, IdComprador: 1, NombreComprador: 1, ApellidoComprador: 1, EmailComprador: 1, IdProductos: 1, FechaVenta: 1, CantidadVendida: 1, TotalVenta: 1 });
    console.log(sales);
}

//metodo para obtener una Venta
async function getSale(id) {
    const sale = await SaleModel
        .find({ _id: id })
        .select({ IdVendedor: 1, NombreVendedor: 1, ApellidoVendedor: 1, EmailVendedor: 1, IdComprador: 1, NombreComprador: 1, ApellidoComprador: 1, EmailComprador: 1, IdProductos: 1, FechaVenta: 1, CantidadVendida: 1, TotalVenta: 1 });
    console.log(sale);
}

// metodo para actualizar un Venta
async function updateSale(id, sale) {
    const result = await SaleModel.updateOne({ _id: id }, {
        $set: sale
    });
    console.log(result);
}
//metodo para eliminar un Venta
async function deleteSale(id) {
    const result = await SaleModel.deleteOne({ _id: id });
    console.log(result);
}

// Exports Functiuons Sale
export { createSale, getSales, getSale, updateSale, deleteSale };

