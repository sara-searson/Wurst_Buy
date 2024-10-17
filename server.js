const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const brandController = require("./controllers/brandController");
const productController = require("./controllers/productController");
const sausageController = require("./controllers/sausageController");
const reviewController = require("./controllers/reviewController")
const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is our landing page!"));

app.get("/brands", brandController.getAllBrands);
app.get("/brands/:id", brandController.getBrandById);
app.post("/brands", brandController.createBrand);
app.put("/brands/:id", brandController.updateBrand);
app.get("/brands/name/:name", brandController.getByName);

app.get("/products", productController.getAllProducts);
app.get("/products/:id", productController.getProductById);
app.post("/products", productController.createProduct);
app.put("/products/:id", productController.updateProduct);
app.delete("/products/:id", productController.deleteProduct);
app.get("/products/brand/:brandName", productController.getByBrand)

app.get("/sausages", sausageController.getAllSausages);
app.get("/sausages/:id", sausageController.getSausageById);
app.post("/sausages", sausageController.createSausage);
app.put("/sausages/:id", sausageController.updateSausage);
app.get("/sausages/name/:name", sausageController.getByName);

app.get("/reviews", reviewController.getAllReviews);
app.get("/reviews/:id", reviewController.getReviewById);
app.post("/reviews", reviewController.createReview);
app.get("/reviews/sausage/:sausageName", reviewController.getReviewBySausage)

// import React from "react"; //Got this from ChatGPT-Mike D
// import ProductFilter from "./components/ProductFilter";

// const App = () => {
//   return (
//     <div>
//       <h1>Product List</h1>
//       <ProductFilter />
//     </div>
//   );
// };

// export default App;
