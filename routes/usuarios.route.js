// * =============
// * IMPORTACIONES
// * =============
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {
	getUsuarios,
	crearUsuario,
	actualizarUsuario,
	borrarUsuario,
} = require('../controllers/usuarios.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

// * =====================
// * INICIALIZAMOS ROUTER
// * =====================
const router = Router();

// * ================
// * OBTENER USUARIOS
// * ================
router.get('/', validarJWT, getUsuarios);

// * =============
// * CREAR USUARIO
// * =============
router.post(
	'/',
	[
		check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
		check('email', 'El email es obligatorio.').isEmail(),
		check('password', 'La contraseña es obligatorio.').not().isEmpty(),
		validarCampos,
	],
	crearUsuario
);

// * ==================
// * ACTUALIZAR USUARIO
// * ==================
router.put(
	'/:id',
	[
		validarJWT,
		check('nombre', 'El nombre es obligatorio.').not().isEmpty(),
		check('email', 'El email es obligatorio.').isEmail(),
		check('role', 'El role es obligatorio.').not().isEmpty(),
		validarCampos,
	],
	actualizarUsuario
);

// * ==============
// * BORRAR USUARIO
// * ==============
router.delete('/:id', validarJWT, borrarUsuario);

module.exports = router;

// TODO: NOTA: Utilizamos el metodo check() para validar cada uno de los campos que nos mandan por parametros. Para ello tenemos que importar el metodo de la siguiente forma: const { check } = require('express-validator');
