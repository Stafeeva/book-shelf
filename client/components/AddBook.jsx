import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addBook, fetchBooks } from '../actions';

import './add-book.scss';

const AddBook = props => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [inputShown, setInput] = useState(false);

  const onChangeTitle = e => {
    setTitle(e.target.value);
  }

  const onChangeAuthor = e => {
    setAuthor(e.target.value);
  }

  const onClickOpenBookFields = () => {
    setInput(true);
  }

  const onClickAddBook = () => {
    const { addBook, status } = props;

    addBook({
      title,
      author,
      status,
    });

    clearState();
  }

  const clearState = () => {
    setTitle('');
    setAuthor('');
    setInput(false);
  }

  return inputShown ? (
    <div className="add-book">
      <div>
        <input value={title} onChange={onChangeTitle} autoFocus />
        <p className="input-label">- by -</p>
        <input value={author} onChange={onChangeAuthor} />
        <button onClick={onClickAddBook}>Add</button>
        <button onClick={clearState}>Cancel</button>
      </div>
    </div>
  ) : (
    <button className="add-book__open-button" onClick={onClickOpenBookFields}>
      +
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book)),
});

export default connect(null, mapDispatchToProps)(AddBook);
