export const addBook = title => ({
  type: "ADD_BOOK",
  title,
});

export const fetchBooks = () => ({
  type: "FETCH_BOOKS",
});

export const setBooks = books => ({
  type: "SET_BOOKS",
  books,
});
