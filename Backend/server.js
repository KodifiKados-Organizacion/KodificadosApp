import  express from "express";
import "./db.js";
import { createRegister, getRegisters, getRegister, updateRegister, deleteRegister, createProduct, getProducts,
    getProduct, updateProduct, deleteProduct, createCategory, getCategories, getCategory, updateCategory,
    deleteCategory, createSale, getSales, getSale, deleteSale, updateSale } from "./db.js";
 

const app = express();
app.listen(5000, () => console.log("Server running on port 5000"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de Registro
app.get("/api/registers", async (req, res) => {
    const registers = await getRegisters();
    res.send(registers);
});

app.get("/api/registers/:id", async (req, res) => {
    const register = await getRegister(req.params.id);
    res.send(register);
});

app.post("/api/registers", async (req, res) => {
    const register = req.body;
    const result = await createRegister(register);
    res.send(result);
});

app.put("/api/registers/:id", async (req, res) => {
    const register = req.body;
    const result = await updateRegister(req.params.id, register);
    res.send(result);
});

app.delete("/api/registers/:id", async (req, res) => {
    const result = await deleteRegister(req.params.id);
    res.send(result);
});

// Rutas de Productos
app.get("/api/products", async (req, res) => {
    const products = await getProducts();
    res.send(products);
});

app.get("/api/products/:id", async (req, res) => {
    const product = await getProduct(req.params.id);
    res.send(product);
});

app.post("/api/products", async (req, res) => {
    const product = req.body;
    const result = await createProduct(product);
    res.send(result);
});

app.put("/api/products/:id", async (req, res) => {
    console.log(req);
    const product = req.body;
    console.log(product);
    const result = await updateProduct(req.params.id, product);
    res.send(result);
});

app.delete("/api/products/:id", async (req, res) => {
    const result = await deleteProduct(req.params.id);
    res.send(result);
});

// Rutas de Categorias
app.get("/api/categories", async (req, res) => {
    const categories = await getCategories();
    res.send(categories);
});

app.get("/api/categories/:id", async (req, res) => {
    const category = await getCategory(req.params.id);
    res.send(category);
});

app.post("/api/categories", async (req, res) => {
    const category = req.body;
    const result = await createCategory(category);
    res.send(result);
});

app.put("/api/categories/:id", async (req, res) => {
    const category = req.body;
    const result = await updateCategory(req.params.id, category);
    res.send(result);
});

app.delete("/api/categories/:id", async (req, res) => {
    const result = await deleteCategory(req.params.id);
    res.send(result);
});


// Rutas de Ventas
app.get("/api/sales", async (req, res) => {
    const sales = await getSales();
    res.send(sales);
});

app.get("/api/sales/:id", async (req, res) => {
    const sale = await getSale(req.params.id);
    res.send(sale);
});

app.post("/api/sales", async (req, res) => {
    const sale = req.body;
    const result = await createSale(sale);
    res.send(result);
});

app.put("/api/sales/:id", async (req, res) => {
    const sale = req.body;
    const result = await updateSale(req.params.id, sale);
    res.send(result);
});

app.delete("/api/sales/:id", async (req, res) => {
    const result = await deleteSale(req.params.id);
    res.send(result);
});

//  createProduct();


// createRegister({
//     Nombre: 'Samuel',
//     Apellido: 'Rodriguez Gomez',
//     Email: 'Sam123@gmail.com',
//     Telefono: '321654987',
//     Direccion: 'Calle 64A # 113F- 23',
//     Ciudad: 'Bogota',
//     Estado: 'Activo',
//     CodigoPostal: '111031',
//     FechaIngreso: '2022-10-29',
//     Admin: true
// });

getRegisters();
getProducts();

// deleteRegister('635ede643457b99655a9865c')

// updateRegister('635ecd6ede7383a3df90c039', { 
//     Nombre: 'William',
//     Apellido: 'Rodriguez',
//     Email: 'williamrodriguez997@gmail.com',
//     Telefono: '3213019261',
//     Direccion: 'Calle 64A # 113F- 23',
//     Ciudad: 'Bogota',
//     Estado: 'Activo',
//     CodigoPostal: '111031',
//     FechaIngreso: '2022-10-01',
//     Admin: true
// });


updateProduct('63601230659562f6f1531876', {
    Imagen: "https://www.asus.com/media/products/P_setting_xxx_0_90_end_500.png"
});