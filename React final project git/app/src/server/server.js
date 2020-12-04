const Sequelize = require('sequelize');

var config = {
	authentication: {
		type: 'default',
		options: {
			userName: 'admin1',
			password: 'admin1',
		},
	},
	server: 'localhost',
	dialect: 'mssql',
	options: {
		database: 'bookDB',
		encrypt: true,
		trustServerCertificate: true,
	},
};

const sequelize = new Sequelize('bookDB', null, null, {
	dialect: 'mssql',
	dialectOptions: config,
});

sequelize
	.authenticate(config)
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});
