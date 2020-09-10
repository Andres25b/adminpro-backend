// * =============
// * IMPORTACIONES
// * =============
const mongoose = require('mongoose');

// * ===================
// * FUNCION CONEXION DB
// * ===================
const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log('DB Online.');
	} catch (error) {
		console.log(error);
		throw new Error('Failed to connect to database.');
	}
};

module.exports = {
	dbConnection,
};
