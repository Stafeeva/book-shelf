import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions';

import BookList from './BookList.jsx';

import './bookshelf.scss';

class Bookshelf extends Component {

  componentWillMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    return (
      <div className="bookshelf">
        <BookList status={undefined} />
        <BookList status="Reading"/>
      </div>
    );
  }
}

export default connect()(Bookshelf);
