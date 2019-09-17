import React from 'react';
import { connect, useDispatch } from 'react-redux';

import { deleteBook, editBook } from '../actions';
import useFormInput from './useFormInput.js';

const EditBookForm = props => {
  const dispatch = useDispatch();

  const { book, onCloseMenu } = props;

  const title = useFormInput(book.title);
  const author = useFormInput(book.author);
  const status = useFormInput(book.status);

  const onClickDeleteBook = () => {
    dispatch(deleteBook(book.id));
  }

  const onClickSave = () => {
    const { book, onCloseMenu } = props;

    dispatch(editBook({
      id: book.id,
      title: title.value,
      author: author.value,
      status: status.value,
    }));

    onCloseMenu();
  }

  return (
    <div>
      <input {...title} />
      <p className="input-label">- by -</p>
      <input {...author} />
      <p className="input-label">- status -</p>
      <input {...status} />
      <button onClick={onClickSave}>Save</button>
      <button onClick={onCloseMenu}>Cancel</button>
      <button onClick={onClickDeleteBook}>Delete Book</button>
    </div>
  );
}

export default EditBookForm;
