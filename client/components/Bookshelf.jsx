import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions';

import BookList from './BookList.jsx';

import './bookshelf.scss';

class Bookshelf extends Component {

  constructor(props) {
    super(props);

    this.props.fetchBooks();
  }

  render() {
    return (
      <div className="bookshelf">
        <BookList status="Queue" />
        <BookList status="Reading" />
        <BookList status="Finished" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(null, mapDispatchToProps)(Bookshelf);
