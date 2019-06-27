import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions';

import AddBook from './AddBook.jsx';

class Booklist extends Component {

  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <h1>Booklist</h1>
        {books.map(book => (
          <p key={book._id}>{book.title}</p>
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
