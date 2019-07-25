import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { deleteBook, fetchBooks } from '../actions';

import AddBook from './AddBook.jsx';
import BookItem from './BookItem.jsx';

import './book-list.scss';

class BookList extends Component {

  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  @autobind filteredList(status) {
    const { books } = this.props;

    return books.filter(book => book.status == status);
  }

  render() {
    const { books, status } = this.props;
    const { filteredList } = this;

    return (
      <div>
        <div className="book-list">
          {filteredList(status).map(book => (
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
