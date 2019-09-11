import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBook } from '../actions';

class BookMenu extends Component {

  constructor(props) {
    super(props);

    const { title, author, status } = props.book;

     this.state = {
       title,
       author,
       status,
     };
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

  deleteBook = () => {
    const { id } = this.props.book;

    this.props.dispatch(deleteBook(id));
  }

  render() {
    const {
      deleteBook,
      onChangeAuthor,
      onChangeTitle,
      onChangeStatus,
      onClickAddBook,
    } = this;
    const { title, status, author } = this.state;
    const { onClickCancel } = this.props;

    console.log('state', this.state);

    return (
      <div>
        <input value={title} onChange={onChangeTitle} />
        <p className="input-label">- by -</p>
        <input value={author} onChange={onChangeAuthor} />
        <p className="input-label">- status -</p>
        <input value={status} onChange={onChangeStatus} />
        <button onClick={onClickAddBook}>Save</button>
        <button onClick={onClickCancel}>Cancel</button>
        <button onClick={deleteBook}>Delete Book</button>
      </div>
    );
  }
}

export default connect()(BookMenu);
