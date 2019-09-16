import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { addBook, fetchBooks } from '../actions';

import AddBookForm from './AddBookForm.jsx';

import './add-book.scss';

const AddBook = props => {
  const dispatch = useDispatch();
  const [inputShown, showInput] = useState(false);

  const onClickOpenBookFields = () => {
    showInput(true);
  }

  const saveBook = book => {
    dispatch(addBook({
      ...book,
      status: props.status,
    }));

    showInput(false);
  }

  const cancel = () => {
    showInput(false);
  }

  return (
    <div className="add-book">
      {inputShown ? (
        <AddBookForm
          onClickSave={saveBook}
          onClickCancel={cancel}
        />
      ) : (
        <button
          className="add-book__open-button"
          onClick={onClickOpenBookFields}
        >
         +
        </button>
      )}
    </div>
  );
}

export default connect()(AddBook);
