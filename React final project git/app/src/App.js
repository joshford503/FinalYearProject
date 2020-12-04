import React from 'react';
import './App.css';
import Nav from './nav';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from 'react-router-dom';

import HomePage from './Home';
import BookPage from './pages/BookPage';
import Header from './Header';
import Basket from './Basket/Basket';
import ShoppingBasket from './ShoppingBasket';
import InfoPage from './InfoPage';
import { Link } from 'react-router-dom';
import BooksDisplay from './pages/Books';
import Footer from './Footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Nav />
				<Switch>
					{/* Routes for all pages needing links */}
					<Route path="/" exact component={Home} />
					<Route path="/Basket" component={ShoppingBasket} />
					<Route path="/info" component={InfoPage} />
					<Route path="/:Category" component={BooksDisplay} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

function Home() {
	return (
		<div id="HomePage1">
			{/* Title of homepage links */}
			<div id="title">
				<h1>Welcome to Books.com</h1>
				<h4>The very latest and best books available</h4>
			</div>
			<br />

			{/* container containing categories links */}
			<div className="container">
				<h3 id="title">Popular Categories</h3>
				<p>
					Just some of our most popular categories that our readers most enjoy!
				</p>

				<div className="row" id="homeRow">
					<div className="column" id="homeCol">
						<div class="card" id="HomeCard">
							<Link to="/Biography">
								<i class="gg-readme"></i>
								<a id="iconText">Biographies</a>
							</Link>
						</div>
					</div>
					<div className="column" id="homeCol">
						<div class="card" id="HomeCard">
							<Link to="/Crime">
								<i class="gg-search"></i>
								<a id="iconText">Crime</a>
							</Link>
						</div>
					</div>

					<div className="column" id="homeCol">
						<div class="card" id="HomeCard">
							<Link to="/Mathematics">
								<i class="gg-calculator"></i>
								<a id="iconText">Mathematics</a>
							</Link>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="container">
				<h1>Our Books</h1>
				<p>
					Books.com is a completely online bookshop that retails all the latest
					books and all your favourite books.
				</p>
				<br />
				<p>
					Not sure what book to read?
					<br /> Take a look at our most popular books at the moment!
				</p>
			</div>
			<br />
		</div>
	);
}

export default App;
