// * =============
// * IMPORTACIONES
// * =============
const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {
	return new Promise((resolve, reject) => {
		// * CUERPO DEL PAYLOAD
		const payload = {
			uid,
		};

		// * JWT
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{
				expiresIn: '12h',
			},
			(err, token) => {
				if (err) {
					reject('No se pudo generar el JWT');
				} else {
					resolve(token);
				}
			}
		);
	});
};

module.exports = {
	generarJWT,
};
