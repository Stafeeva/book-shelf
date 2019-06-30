import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBook } from '../actions';

import './add-book.css';

class AddBook extends Component {

  render() {

    const onClickAddBook = () => {
      console.log('dispatching.....');
      this.props.dispatch(addBook('1984'));
    }

    return (
      <div className="add-book">
        <button className="add-book__button" onClick={onClickAddBook}>
          +
        </button>
      </div>
    );
  }
}

export default connect()(AddBook);
