const express = require("express");
const app = express();
const cors = require("cors");
const wigsRoutes = require("./routes/wigs.routes");

app.use(cors());
app.use(express.json());
app.use("/wigs", wigsRoutes);

module.exports = app;
