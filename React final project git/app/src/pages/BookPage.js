import React from 'react';
import '../App.css';
import { useParams } from 'react-router';
function BookPage() {
	let { Category } = useParams();

	return Category;
}

export default BookPage;

// <div id="title">
// 	<h2>Childrens Books</h2>
// </div>
// );
