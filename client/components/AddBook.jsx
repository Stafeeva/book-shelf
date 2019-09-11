import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBook, fetchBooks } from '../actions';

import './add-book.scss';

class AddBook extends Component {

  constructor(props) {
    super(props);

     this.state = {
       title: '',
       author: '',
       status: '',
       showInputFields: false,
     };
  }

  onClickOpenBookField = () => {
    this.setState({
      showInputFields: true,
    });
  }

  onChangeTitle = event => {
    const title = event.target.value;

    this.setState({
      title,
    });
  }

  onChangeAuthor = event => {
    const author = event.target.value;

    this.setState({
      author,
    });
  }

  onChangeStatus = event => {
    const status = event.target.value;

    this.setState({
      status,
    });
  }

  onClickAddBook = () => {
    const { author, status, title } = this.state;

    this.props.dispatch(addBook({
      title,
      author,
      status,
    }));

    this.setState({
      title: '',
      author: '',
      status: '',
      showInputFields: false,
    });
  }

  onClickCancel = () => {
    this.setState({
      title: '',
      author: '',
      status: '',
      showInputFields: false,
    });
  }

  render() {
    const {
      author,
      status,
      title,
      showInputFields
    } = this.state;
    const {
      onChangeAuthor,
      onChangeStatus,
      onChangeTitle,
      onClickAddBook,
      onClickCancel,
      onClickOpenBookField,
    } = this;

    return (
      <div className="add-book">
        {showInputFields ? (
          <div>
            <input value={title} onChange={onChangeTitle} autoFocus />
            &nbsp;by&nbsp;
            <input value={author} onChange={onChangeAuthor} />
            &nbsp;status&nbsp;
            <input value={status} onChange={onChangeStatus} />
            <button className="add-book__add-button" onClick={onClickAddBook}>Add</button>
            <button className="add-book__add-button" onClick={onClickCancel}>Cancel</button>
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
