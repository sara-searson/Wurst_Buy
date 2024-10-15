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

// app.get(`/plants`, plantController.getAllPlants);
// app.get(`/plants/:id`, plantController.getPlantById);
// app.post(`/plants`, plantController.createPlant);
// app.put("/plants/:id", plantController.updatePlant);
// app.delete("/plants/:id", plantController.deletePlant);

//Edit these based on controllers.
