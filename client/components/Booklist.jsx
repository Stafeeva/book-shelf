import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions';

import AddBook from './AddBook.jsx';

import './booklist.css';

class Booklist extends Component {

  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    const { books } = this.props;

    return (
      <div className="booklist">
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
