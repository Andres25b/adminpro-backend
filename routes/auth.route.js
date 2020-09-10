// * =============
// * IMPORTACIONES
// * =============
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');

// * =====================
// * INICIALIZAMOS ROUTER
// * =====================
const router = Router();

// * ======
// * lOGIN
// * ======
router.post(
	'/',
	[
		check('email', 'El correo es obligatorio.').isEmail(),
		check('password', 'El password es obligatorio.').not().isEmpty(),
		validarCampos,
	],
	login
);

module.exports = router;
