import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { deleteBook, fetchBooks } from '../actions';

import AddBook from './AddBook.jsx';

import './booklist.css';

class Booklist extends Component {

  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  @autobind onClickDeleteBook(bookId) {
    console.log('bookId', bookId);
    this.props.dispatch(deleteBook(bookId));
  }

  render() {
    const { books } = this.props;
    const { onClickDeleteBook } = this;

    return (
      <div className="booklist">
        {books.map(book => (
          <div className="booklist__item" key={book.id}>
            <div>
              <p className="booklist__title">{book.title}</p>
              <p className="booklist__author">by {book.author}</p>
            </div>
            <button className="booklist__delete-book" onClick={() => onClickDeleteBook(book.id)}>x</button>
          </div>
        ))}
        <AddBook />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(Booklist);
