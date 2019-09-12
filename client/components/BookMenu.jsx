import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteBook, editBook } from '../actions';

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
    const { book, deleteBook } = this.props;
    const { id } = book;

    deleteBook(id);
  }

  onClickSave = () => {
    const { book, editBook, onCloseMenu } = this.props;
    const { id } = book;

    editBook({
      id,
      ...this.state,
    });

    onCloseMenu();
  }

  render() {
    const {
      deleteBook,
      onChangeAuthor,
      onChangeTitle,
      onChangeStatus,
      onClickSave,
    } = this;
    const { title, status, author } = this.state;
    const { onCloseMenu } = this.props;

    return (
      <div>
        <input value={title} onChange={onChangeTitle} />
        <p className="input-label">- by -</p>
        <input value={author} onChange={onChangeAuthor} />
        <p className="input-label">- status -</p>
        <input value={status} onChange={onChangeStatus} />
        <button onClick={onClickSave}>Save</button>
        <button onClick={onCloseMenu}>Cancel</button>
        <button onClick={deleteBook}>Delete Book</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteBook: id => dispatch(deleteBook(id)),
  editBook: book => dispatch(editBook(book)),
});

export default connect(null, mapDispatchToProps)(BookMenu);
