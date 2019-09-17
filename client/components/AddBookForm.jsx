import React from 'react';

import useFormInput from './useFormInput.js';

const AddBookForm = props => {
  const title = useFormInput('');
  const author = useFormInput('');

  const onClickAddBook = () => {
    props.onClickSave({
      title: title.value,
      author: author.value,
    });
  }

  return (
    <div>
      <input {...title} autoFocus />
      <p className="input-label">- by -</p>
      <input {...author} />
      <button onClick={onClickAddBook}>Add</button>
      <button onClick={props.onClickCancel}>Cancel</button>
    </div>
  );
}

export default AddBookForm;
