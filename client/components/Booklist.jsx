import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBook, fetchBooks } from '../actions';

import AddBook from './AddBook.jsx';
import BookItem from './BookItem.jsx';

import './book-list.scss';

class BookList extends Component {

  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <div className="book-list">
          {books.map(book => (
            <BookItem key={book.id} book={book} />
          ))}
        </div>
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

export default connect(mapStateToProps)(BookList);
