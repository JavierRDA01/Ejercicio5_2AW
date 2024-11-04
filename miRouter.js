const express = require('express');
const miRouter = express.Router();

// Ruta para eliminar un producto (mejor usar DELETE en lugar de GET)
miRouter.delete("/eliminarProducto", (req, res) => {
    console.log("Eliminando producto");
    res.send("Producto eliminado exitosamente");
});

// Ruta para añadir un producto (mejor usar POST en lugar de GET)
miRouter.post("/añadirProducto", (req, res) => {
    console.log("Añadiendo producto");
    res.send("Producto añadido exitosamente");
});

// Ruta para consultar un producto (mantener GET)
miRouter.get("/consultarProducto", (req, res) => {
    console.log("Consultando producto");
    res.send("Producto consultado exitosamente");
});

module.exports = miRouter;
