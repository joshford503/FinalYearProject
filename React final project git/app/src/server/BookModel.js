const Sequelize = require('sequelize');
import sequelize from './server';

const BookModel = sequelize.define(
	'bookmodel',
	{
		BookID: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		BookName: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		Author: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		Price: {
			type: Sequelize.DECIMAL,
			allowNull: false,
		},
		Category: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		Description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		BookPic: {
			type: Sequelize.STRING(40),
			allowNull: true,
		},
	},
	{
		sequelize,
		BookModel,
		BookShop,
		timestamps: false,
	}
);

export default BookModel;
