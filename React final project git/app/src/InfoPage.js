import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function InfoPage() {
	return (
		<div id="info">
			<div id="title">
				<h1>Important information</h1>
			</div>

			<h2>About</h2>
			<p>
				Books.com are a fully online book reatailer which caters for books of
				all types and categories.
			</p>
			<br />
			<div className="card">
				<h2>Delivery overview</h2>
				<h4>Standard free delivery</h4>
				<p>3-5 working days</p>
				<h4>Express delivery</h4>
				<p>1-2 working days</p>
				<h4>First class deliery</h4>
				<p>1-2 working days(weekends)</p>
				<br />
				<p>Full Information Below</p>
			</div>
			<br />
			<h2>Delivery</h2>
			<h3>Standard free delivery</h3>
			<p>
				Books.com offer free delivery across the UK!
				<br />
				Expect delivery time to be within 3-5 working days.
			</p>
			<h4>Express delivery</h4>
			<p>
				Express delivery can be chosen at the checkout
				<br />
				and will aim to get your books/book to you within 1-2 working days
			</p>
			<h4>First class</h4>
			<p>
				First class can be chosen at the checkout and will aim to get your book
				to you within 1-2 days including weekends
			</p>
			<br />
			<br />
			<br />
		</div>
	);
}

export default InfoPage;
