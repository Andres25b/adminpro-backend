// * =============
// * IMPORTACIONES
// * =============
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario.model');
const { generarJWT } = require('../helpers/jwt');

// * ======
// * lOGIN
// * ======
const login = async (req, res = response) => {
	const { email, password } = req.body;
	try {
		const usuarioDB = await Usuario.findOne({ email });

		// * VERIFICAR EL EMAIL
		if (!usuarioDB) {
			return res.status(404).json({
				ok: false,
				msg: 'El email no es valido.',
			});
		}

		// * VERIFICAR EL PASSWORD
		const validarPassword = bcrypt.compareSync(password, usuarioDB.password);
		if (!validarPassword) {
			return res.status(400).json({
				ok: false,
				msg: 'La contraseña no es valida.',
			});
		}

		// * GENERAR EL TOKEN
		const token = await generarJWT(usuarioDB.id);

		res.json({
			ok: true,
			token,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: 'Error inesperado.',
		});
	}
};

module.exports = {
	login,
};
