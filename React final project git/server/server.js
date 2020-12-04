//Initiallising node modules
var express = require('express');
var bodyParser = require('body-parser');
var sql = require('mssql');
var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
	//Enabling CORS
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization'
	);
	next();
});

//Setting up server
var server = app.listen(process.env.PORT || 8080, function () {
	var port = server.address().port;
	console.log('App now running on port', port);
});

//connection string to connect to database
var dbConfig = {
	user: 'admin1',
	password: 'admin1',
	database: 'bookDB',
	server: 'localhost',
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
};

//connection pool
var executeQuery = async function (res, query) {
	sql.on('error', (err) => {});

	sql
		.connect(dbConfig)
		.then((pool) => {
			return pool.request().query(query);
		})
		.then((result) => {
			console.dir(result);
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
};

//Get request for books
app.get('/api/books', function (req, res) {
	var query = 'select * from BookShop';
	executeQuery(res, query, null);
});

//Get request for books with selected category
app.get('/api/books/:Category', function (req, res) {
	var query =
		"select * from BookShop WHERE Category = '" + req.params.Category + "'";

	executeQuery(res, query);
});
