import { ADD_BOOK, REMOVE_BOOK } from './actionTypes'


// action creators

export function addBook(book) {
  return { type: ADD_BOOK, payload: book }
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, payload: book }
}