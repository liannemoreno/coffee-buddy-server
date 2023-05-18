const express = require("express");
const app = express();
const brewingRoutes = require("./routes/brewing_route");
const collectionsRoutes = require("./routes/collections_route");
const cors = require('cors'); 
require('dotenv').config()
const { PORT } = process.env

app.use(cors())
app.use(express.json());

app.use(express.static("assets"));
app.use("/brews", brewingRoutes);
app.use("/collections", collectionsRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});