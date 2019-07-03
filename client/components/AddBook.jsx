import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { addBook } from '../actions';

import './add-book.css';

class AddBook extends Component {
  constructor(props) {
    super(props);

     this.state = {
       showBookField: false,
     };
  }

  @autobind onClickAddBook() {
    console.log('dispatching.....');
    this.props.dispatch(addBook('1984'));
  }

  render() {
    const { showAddressSearchField } = this.state;
    const { onClickAddBook } = this;

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
