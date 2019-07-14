export const addBook = book => ({
  type: "ADD_BOOK",
  book,
});

export const deleteBook = id => ({
  type: "DELETE_BOOK",
  id,
});

export const fetchBooks = () => ({
  type: "FETCH_BOOKS",
});

export const setBooks = books => ({
  type: "SET_BOOKS",
  books,
});
