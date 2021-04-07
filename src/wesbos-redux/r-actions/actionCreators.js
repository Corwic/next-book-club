// add book
export function addBook(bookData) {
  return {
    type: 'ADD_BOOK',
    bookData
  }
}

// delete book
export function removeBook(bookId) {
  return {
    type: 'REMOVE_BOOK',
    bookId
  }
}


// add reader
export function addReader(readerData) {
  return {
    type: 'ADD_READER',
    readerData
  }
}
// delete reader
export function removeReader(readerId) {
  return {
    type: 'REMOVE_READER',
    readerId
  }
}
