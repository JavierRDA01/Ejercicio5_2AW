const mysql = require("mysql");

// Configuración del pool de conexiones
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda"
});



module.exports = connection;
