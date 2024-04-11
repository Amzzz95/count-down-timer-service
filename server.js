const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const router = require("./router");

const mongoose = require("mongoose");

const db = require("./config/db");

mongoose
  .connect(db.url, db.options)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting MongoDB: ", err));

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

// configure body parser
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// register routes
app.use("/", router);

app.listen(port);

console.log("listening at port", port);

module.exports = app;
