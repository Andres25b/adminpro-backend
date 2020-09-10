// * =============
// * IMPORTACIONES
// * =============
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// * ======================
// * CREACION DEL SERVIDOR
// * ======================
const app = express();

// * ================
// * CONFIGURAR COORS
// * ================
app.use(cors());

// * ===========================
// * LESCTURA Y PARSEO DEL BODY
// * ===========================
app.use(express.json());

// * =============
// * BASE DE DATOS
// * =============
dbConnection();

// * =====
// * Rutas
// * =====
app.use('/api/usuarios', require('./routes/usuarios.route'));
app.use('/api/login', require('./routes/auth.route'));

app.listen(process.env.PORT, () =>
	console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`)
);
