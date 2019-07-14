import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import BookMenu from './BookMenu.jsx';

class BookItem extends Component {

  constructor(props) {
    super(props);

     this.state = {
       openBookMenu: false,
     };
  }

  @autobind onClickOpenBookMenu() {
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
        <button className="booklist__item" onClick={onClickOpenBookMenu}>
          <p className="booklist__title">{book.title}</p>
          <p className="booklist__author">by {book.author}</p>
        </button>
        {openBookMenu && (
          <BookMenu bookId={book.id}/>
        )}
      </div>
    );
  }
}

export default BookItem;
