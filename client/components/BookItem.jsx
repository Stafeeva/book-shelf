import React, { useState } from 'react';

import BookMenu from './BookMenu.jsx';

import './book-item.scss';

const BookItem = props => {
  const [bookMenuOpened, setBookMenu] = useState(false);
  const { book } = props;
  const { id, title, author } = book;

  const onClickMenu = () => {
    setBookMenu(!bookMenuOpened);
  }

  return (
    <div key={id}>
      <div className="book-item">
        <div>
          <p className="book-item__title">{title}</p>
          <p className="book-item__author">by {author}</p>
        </div>
        <button className="book-item__menu-button" onClick={onClickMenu}>...</button>
      </div>
      {bookMenuOpened && (
        <BookMenu book={book} onCloseMenu={onClickMenu} />
      )}
    </div>
  );
}

export default BookItem;
