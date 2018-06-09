export function selectBook(book) {
  // actionCreator, return an action with type property
  return {
    type: 'BOOK_SELECTED', // Always an uppercase
    payload: book
  };
}