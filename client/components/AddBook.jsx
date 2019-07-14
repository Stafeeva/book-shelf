import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { addBook } from '../actions';

import './add-book.css';

class AddBook extends Component {
  constructor(props) {
    super(props);

     this.state = {
       title: '',
       author: '',
       showInputFields: false,
     };
  }

  @autobind onClickOpenBookField() {
    this.setState({
      showInputFields: true,
    });
  }

  @autobind onChangeTitle(event) {
    const title = event.target.value;

    this.setState({
      title,
    });
  }

  @autobind onChangeAuthor(event) {
    const author = event.target.value;

    this.setState({
      author,
    });
  }

  @autobind onClickAddBook() {
    const { author, title } = this.state;

    this.props.dispatch(addBook({
      title,
      author,
    }));

    this.setState({
      title: '',
      author: '',
      showInputFields: false,
    });
  }

  render() {
    const { author, title, showInputFields } = this.state;
    const {
      onChangeAuthor,
      onChangeTitle,
      onClickAddBook,
      onClickOpenBookField,
    } = this;

    return (
      <div className="add-book">
        {showInputFields ? (
          <div>
            <input value={title} onChange={onChangeTitle} />
            &nbsp;by&nbsp;
            <input value={author} onChange={onChangeAuthor} />
            <button className="add-book__add-button" onClick={onClickAddBook}>Add</button>
          </div>
        ) : (
          <button className="add-book__open-button" onClick={onClickOpenBookField}>
            +
          </button>
        )}
      </div>
    );
  }
}

export default connect()(AddBook);
