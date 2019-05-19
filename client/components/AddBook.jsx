import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBook } from '../actions';

class AddBook extends Component {

  render() {

    const onClickAddBook = () => {
      console.log('dispatching.....');
      this.props.dispatch(addBook('1984'));
    }

    return (
      <div>
        <button onClick={onClickAddBook}>
          Add book
        </button>
      </div>
    );
  }
}

export default connect()(AddBook);
