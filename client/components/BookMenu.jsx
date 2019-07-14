import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { deleteBook } from '../actions';

class BookMenu extends Component {

  @autobind deleteBook() {
    const { bookId } = this.props;

    this.props.dispatch(deleteBook(bookId));
  }

  render() {
    const { deleteBook } = this;

    return (
      <div>
        <div>Menu!</div>
        <button onClick={deleteBook}>Delete</button>
      </div>
    );
  }
}

export default connect()(BookMenu);
