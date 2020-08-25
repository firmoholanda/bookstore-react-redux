import { ADD_BOOK, REMOVE_BOOK } from './actionTypes'


// action creators

export function addBook(text) {
  return { type: ADD_BOOK, text }
}

export function removeBook(text) {
  return { type: REMOVE_BOOK, text }
}