const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

try {
  mongoose.connect("mongodb://root:root@database:27017/miapp?authSource=admin");
} catch (error) {
  console.log(error);
}

const router = require("./routes/index.js");

app.use(router);

app.listen(process.env.PORT_BACKEND || 3000, () =>
  console.log(`Escuchando por el puerto: ${process.env.PORT_BACKEND}`)
);
