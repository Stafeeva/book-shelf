import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { addBook } from '../actions';

import './add-book.css';

class AddBook extends Component {
  constructor(props) {
    super(props);

     this.state = {
       bookToAdd: '',
       showBookField: false,
     };
  }

  @autobind onClickOpenBookField() {
    this.setState({
      showBookField: true,
    });
  }

  @autobind onChangeBookField(event) {
    const book = event.target.value;

    this.setState({
      bookToAdd: book,
    });
  }

  @autobind onClickAddBook() {
    this.props.dispatch(addBook(this.state.bookToAdd));

    this.setState({
      bookToAdd: '',
      showBookField: false,
    });
  }

  render() {
    const { bookToAdd, showBookField } = this.state;
    const { onChangeBookField, onClickAddBook, onClickOpenBookField } = this;

    return (
      <div className="add-book">
        {showBookField ? (
          <div>
            <input value={bookToAdd} onChange={onChangeBookField} />
            <button className="add-book__add-button" onClick={onClickAddBook}>Add</button>
          </div>
        ) : (
          <button className="add-book__open-button" onClick={onClickOpenBookField}>
            +
          </button>
        )}
      </div>
    );
  }
}

export default connect()(AddBook);
