const Sequelize = require('sequelize');
import BookModel from '../server/BookModel';

app.get('/books:categories', async (req, res) => {
	await BookModel.findAll(req.params.Category).then((result) =>
		res.json(result)
	);
});

BookModel.findAll({
	where: {
		category: 'Biography',
	},
});

BookModel.findAll({
	where: {
		category: 'FoodandDrink',
	},
});

BookModel.findAll({
	where: {
		category: 'Music',
	},
});

BookModel.findAll({
	where: {
		category: 'Fitness',
	},
});

BookModel.findAll({
	where: {
		category: 'Crime',
	},
});

BookModel.findAll({
	where: {
		category: 'History',
	},
});

BookModel.findAll({
	where: {
		category: 'CrimeFiction',
	},
});

BookModel.findAll({
	where: {
		category: 'Mystery',
	},
});

BookModel.findAll({
	where: {
		category: 'Superhero',
	},
});

BookModel.findAll({
	where: {
		category: 'Romance',
	},
});

BookModel.findAll({
	where: {
		category: 'Childrens',
	},
});

BookModel.findAll({
	where: {
		category: 'ChildrensNonFiction',
	},
});

BookModel.findAll({
	where: {
		category: 'Early Learning',
	},
});

BookModel.findAll({
	where: {
		category: 'Activity Books',
	},
});

BookModel.findAll({
	where: {
		category: 'Young adult',
	},
});

BookModel.findAll({
	where: {
		category: 'Art',
	},
});

BookModel.findAll({
	where: {
		category: 'Computing and IT',
	},
});

BookModel.findAll({
	where: {
		category: 'Geography',
	},
});

BookModel.findAll({
	where: {
		category: 'Maths',
	},
});

BookModel.findAll({
	where: {
		category: 'Science',
	},
});

BookModel.findAll({
	where: {
		category: 'English Lang',
	},
});
