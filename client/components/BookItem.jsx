import React, { Component } from 'react';

import BookMenu from './BookMenu.jsx';

import './book-item.scss';

class BookItem extends Component {

  constructor(props) {
    super(props);

     this.state = {
       openBookMenu: false,
     };
  }

  onClickOpenBookMenu = () => {
    this.setState({
      openBookMenu: !this.state.openBookMenu,
    });
  }

  render() {
    const { book } = this.props;
    const { openBookMenu } = this.state;
    const { onClickOpenBookMenu } = this;

    return (
      <div key={book.id}>
        <div className="book-item">
          <div>
            <p className="book-item__title">{book.title}</p>
            <p className="book-item__author">by {book.author}</p>
          </div>
          <button className="book-item__menu-button" onClick={onClickOpenBookMenu}>...</button>
        </div>
        {openBookMenu && (
          <BookMenu bookId={book.id}/>
        )}
      </div>
    );
  }
}

export default BookItem;
