import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Basket extends Component {

    render() {
        let addedBooks = this.props.books.length ?
            (
                this.props.books.map(book=>{
                    return(
                        <li className="collection-book avatar" key={book.BookID}>
                            <div className="book-pic">
                                <img src={book.BookPic}/>
                            </div>

                            
                        </li>
                    )
                })

            )
    }
    
}