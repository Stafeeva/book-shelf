import React, { useState } from 'react';

import './add-book.scss';

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
    <div className="add-book">
      <div>
        <input {...title} autoFocus />
        <p className="input-label">- by -</p>
        <input {...author} />
        <button onClick={onClickAddBook}>Add</button>
        <button onClick={props.onClickCancel}>Cancel</button>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onHandleChange = (e) => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: onHandleChange,
  }
}

export default AddBookForm;
