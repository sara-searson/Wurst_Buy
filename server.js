const express = require(`express`);
const db = require(`./db`);
const bodyParser = require(`body-parser`);
const logger = require(`morgan`);
const brandController = require(`./controllers/brandController`);
const productController = require(`./controllers/productController`);
const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger(`dev`));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get(`/`, (req, res) => res.send(`This is our landing page!`));

app.get(`/brands`, brandController.getAllBrands);
app.get(`/brands/:id`, brandController.getBrandById);
app.post(`/brands`, brandController.createBrand);
app.put(`/brands/:id`, brandController.updateBrand);

app.get(`/products`, productController.getAllProducts);
app.get(`/products/:id`, productController.getProductById);
app.post(`/products`, productController.createProduct);
app.put("/products/:id", productController.updateProduct);
app.delete("/products/:id", productController.deleteProduct);
