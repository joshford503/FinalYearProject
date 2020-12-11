import '../App.css';
import React, { Component } from 'react';
import { useParams, Router } from 'react-router';
import { Link } from 'react-router-dom';
import BookPage from './BookPage';
import { connect } from 'react-redux';
import { addToBasket } from '../Basket/BasketOptions';
// import { imagePath } from '../db_pics';

function GetUrl() {
	let { Category } = useParams();

	return Category;
}

// function GetID() {
// 	let { ID } = useParams();

// 	return ID;
// }

class BooksDisplay extends Component {
	constructor(props) {
		super(props);
		// this.state = { books };
		this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
		this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
		this.state = {
			Books: [],
			loading: true,
			Category: this.props.match.params.Category,
		};
	}

	sortByPriceAsc() {
		this.setState((prevState) => {
			this.state.Books.sort((a, b) => a.Price - b.Price);
			console.log('asscending');
		});
	}

	sortByPriceDesc() {
		this.setState((prevState) => {
			this.state.Books.sort((a, b) => b.Price - a.Price);
			console.log('descending');
		});
	}

	componentDidMount() {
		// this.setState({Category: this.props.match.params.Category})
		this.GetBooks();
	}

	componentDidUpdate() {
		console.log('DidUpdate', this.props.match.params.Category);
		console.log(this.state.Category);
		console.log();
		if (this.props.match.params.Category !== this.state.Category) {
			this.GetBooks();
		}
	}

	handleClick() {
		console.log('test');
	}

	static showData(Books) {
		const BasketButton = {
			fontSize: '15px',
		};
		this.state = {
			BookName: '',
			Author: '',
			Price: '',
		};

		return (
			<div>
				{Books.map((book) => (
					<div className="card" key={book.BookID}>
						<img
							alt="Book-Image"
							src={require(`../db_pics/${book.BookPic}`)}
						></img>
						<h5 className="card-title">{book.BookName}</h5>
						<a>({book.Author})</a>
						<h5 className="card-price">£{book.Price}</h5>
						<p>{book.Description}</p>
						<button onClick={this.handleClick} style={BasketButton} to="/">
							Add to Basket
						</button>
						<br />
						<br />
						<br />
					</div>
				))}
			</div>
		);
	}

	render() {
		let contents = this.state.loading ? (
			<p>Loading Books...</p>
		) : (
			BooksDisplay.showData(this.state.Books)
		);

		return (
			<div id="title">
				<h2>{<GetUrl />}</h2>
				<div id="SortFilter">
					<div className="container" id="BookContainer">
						<div className="row">
							<div classname="column">
								<form>
									<label>Price:</label>
									<select>
										<option onClick={this.sortByPriceAsc} value="LowToHigh">
											Low To High
										</option>
										<option onClick={this.sortByPriceDesc} value="HighToLow">
											High To Low
										</option>
									</select>
								</form>
							</div>
							<br />
							<div classname="column">
								<form>
									<label>Order:</label>
									<select>
										<option onClick={this.sortByPriceAsc} value="LowToHigh">
											default
										</option>
										<option onClick={this.sortByPriceDesc} value="HighToLow">
											Alphabetical
										</option>
									</select>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div>{contents}</div>
			</div>
		);
	}

	async GetBooks() {
		let data = await fetch(
			`http://localhost:8080/api/books/${this.props.match.params.Category}`
		)
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				return 'Request failed with error: ' + error;
			});

		console.log(data);
		this.setState({
			Books: data.recordsets[0],
			loading: false,
			Category: this.props.match.params.Category,
		});
	}
}

export default BooksDisplay;
