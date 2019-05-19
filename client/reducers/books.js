const books = (state = [], action) => {
  console.log('action', action);
  console.log('state', state);

  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.title,
        }
      ]
      
    default:
      return state;
  }
}

export default books;
