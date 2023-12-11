const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery', true);

// Obtener la URL de conexión desde la variable de entorno
const url = process.env.DB_URL_ATLAS;

if (!url) {
  console.error('La variable de entorno DB_URL_ATLAS no está configurada.');
  process.exit(1);
}

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connection to MongoDB established :)"));

module.exports = mongoose;
