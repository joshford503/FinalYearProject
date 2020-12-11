import '../App.css';
import React, { Component } from 'react';
import { useParams } from 'react-router';

export default class EnglishLang extends Component {
	constructor(props) {
		super(props);
		this.state = { Books: [], loading: true };
	}

	componentDidMount() {
		this.GetBooks();
	}

	static showData(Books) {
		return (
			<div>
				{Books.map((book) => (
					<div className="card" key={book.BookID}>
						<div className="card-body">
							<img
								src={`\\Users\\admin\\Desktop\\DBpics\\${book.BookPic}`}
							></img>
							<h5 className="card-title">{book.BookName}</h5>
							<h5 classname="card-price">{book.Price}</h5>
						</div>
					</div>
				))}
			</div>
		);
	}

	render() {
		let contents = this.state.loading ? (
			<p>Loading Books...</p>
		) : (
			EnglishLang.showData(this.state.Books)
		);

		return (
			<div id="title">
				<h2>English</h2>
				<div>{contents}</div>
			</div>
		);
	}

	async GetBooks() {
		let data = await fetch('http://localhost:8080/api/books/English Lang')
			.then((response) => {
				return response.json();
			})
			.catch((error) => {
				return 'Request failed with error: ' + error;
			});

		console.log(data);
		this.setState({ Books: data.recordsets[0], loading: false });
	}
}
