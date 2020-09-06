// * =============
// * IMPORTACIONES
// * =============
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { dbConnection } = require('./database/config');

// * ======================
// * CREACION DEL SERVIDOR
// * ======================
const app = express();

// * ================
// * CONFIGURAR COORS
// * ================
app.use(cors());

// * =============
// * BASE DE DATOS
// * =============
dbConnection();

// * =====
// * Rutas
// * =====
app.get('/', (req, res) => {
	res.json({
		ok: true,
		message: 'Hola Mundo',
	});
});

app.listen(process.env.PORT, () =>
	console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`)
);
