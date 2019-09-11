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
    console.log("clicked open book menu", this.props);
    this.setState({
      openBookMenu: true,
    });
  }

  render() {
    const { book } = this.props;
    const { openBookMenu } = this.state;
    const { onClickOpenBookMenu } = this;

    return (
      <div key={book.id}>
        <button className="book-item" onClick={onClickOpenBookMenu}>
          <p className="book-item__title">{book.title}</p>
          <p className="book-item__author">by {book.author}</p>
        </button>
        {openBookMenu && (
          <BookMenu bookId={book.id}/>
        )}
      </div>
    );
  }
}

export default BookItem;
