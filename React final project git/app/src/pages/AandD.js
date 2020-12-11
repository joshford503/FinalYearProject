import '../App.css';
import React, { Component } from 'react';

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
					<div className="row" key={book.BookID}>
						<div id="col">
							{book.BookName}
							<br />
							{book.Author}
							<img src={`../db pics/{book.BookPic}`}></img>
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
				<h2>Art and Design</h2>
				<div>{contents}</div>
			</div>
		);
	}

	async GetBooks() {
		let data = await fetch('http://localhost:8080/api/books/Art')
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
