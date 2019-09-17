import React, { useState } from 'react';

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onHandleChange = e => {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: onHandleChange,
  }
}

export default useFormInput;
