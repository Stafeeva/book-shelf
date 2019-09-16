import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { fetchBooks } from '../actions';

import BookList from './BookList.jsx';

import './bookshelf.scss';

const Bookshelf = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  });

  return (
    <div className="bookshelf">
      <BookList status="Queue" />
      <BookList status="Reading" />
      <BookList status="Finished" />
    </div>
  );
}

export default connect()(Bookshelf);
