import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBook } from '../actions';

class BookMenu extends Component {

  editBook = () => {
    const { bookId } = this.props;

    console.log('clicked edit book');

    // this.props.dispatch(deleteBook(bookId));
  }

  deleteBook = () => {
    const { bookId } = this.props;

    this.props.dispatch(deleteBook(bookId));
  }

  render() {
    const { editBook, deleteBook } = this;

    return (
      <div>
        <button onClick={editBook}>Edit</button>
        <button onClick={deleteBook}>Delete</button>
      </div>
    );
  }
}

export default connect()(BookMenu);
