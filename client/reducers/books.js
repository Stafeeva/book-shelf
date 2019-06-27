const books = (state = [], action) => {
  switch (action.type) {
    // case 'ADD_BOOK':
    //   return [
    //     ...state,
    //     {
    //       title: action.title,
    //     }
    //   ]

    case 'SET_BOOKS':
      return action.books;

    default:
      return state;
  }
}

export default books;
