import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';

import { deleteBook } from '../actions';

import AddBook from './AddBook.jsx';
import BookItem from './BookItem.jsx';

import './book-list.scss';

const BookList = props => {
  const books = useSelector(state => state.books);
  const { status } = props;

  const filteredList = () => {
    return books.filter(book => book.status == status);
  }

  return (
    <div className="book-list">
      <div>
        <h3>{status}</h3>
        {filteredList().map(book => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
      <AddBook status={status} />
    </div>
  );
}

export default connect()(BookList);
