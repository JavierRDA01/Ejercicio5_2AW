const pool = require('./connection');

// Función para consultar productos activos
const consultarProductosActivos = (callback) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(`Error al obtener la conexión: ${err.message}`);
            return;
        }

        const sql = "SELECT * FROM productos WHERE activo = 1";
        
        connection.query(sql, (err, resultado) => {
            connection.release();

            if (err) {
                console.log("Error en la consulta: ", err.message);
                callback(err, null);
            } else {
                callback(null, resultado);
            }
        });
    });
};

// Función para insertar nuevos productos
const insertarNuevosProductos = (data) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(`Error al obtener la conexión: ${err.message}`);
            return;
        }

        const sql = "INSERT INTO productos(id, nombre, precio, disponible, fecha_registro, activo) VALUES(?,?,?,?,?,?)";
        const values = [data.id, data.nombre, data.precio, data.disponible, data.fecha_registro, data.activo];

        connection.query(sql, values, (err, resultado) => {
            connection.release();

            if (err) {
                console.log("Error en la inserción: ", err.message);
            } else {
                console.log("Producto insertado con éxito, Id: ", resultado.insertId);
            }
        });
    });
};

// Función para eliminar productos
const eliminarProductos = (data) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(`Error al obtener la conexión: ${err.message}`);
            return;
        }
        
        const sql = "DELETE FROM productos WHERE id = ?";
        const value = data.id;

        connection.query(sql, value, (err, resultado) => {
            connection.release();

            if (err) {
                console.log("Error en la eliminación: ", err.message);
            } else {
                console.log("Se ha eliminado el producto con Id: ", data.id);
            }
        });
    });
};

module.exports = {
    consultarProductosActivos,
    insertarNuevosProductos,
    eliminarProductos
};
