const path = require('path');
const express = require('express');
const mysql = require("mysql");

const app = express();
const miRouter = require("./miRouter");
const port = 3000;


// Configuración del pool de conexiones
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda"
});


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});


app.listen(port, () => {
    console.log(`Servidor en escucha en el puerto: ${port}`);
});
