import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBook } from '../actions';

import AddBook from './AddBook.jsx';
import BookItem from './BookItem.jsx';

import './book-list.scss';

class BookList extends Component {

  filteredList = () => {
    const { books, status } = this.props;

    return books.filter(book => book.status == status);
  }

  render() {
    const { books, status } = this.props;
    const { filteredList } = this;

    return (
      <div>
        <div className="book-list">
          <h3>{status || 'Queue'}</h3>
          {filteredList().map(book => (
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
