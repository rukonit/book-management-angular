import { from } from "rxjs";
import { Book } from "../book.model";
import * as fromBookAction from './book.actions'

export interface State {
    books: Book[]
}

const initialState: State = {
    books: []
}

export function bookReducer(state: State = initialState, action: fromBookAction.BookActions) {

    switch(action.type) {
        case fromBookAction.SET_BOOKS:
         
        return {
            ...state,
            books: [...state.books, ...action.payload]
        }

         case fromBookAction.AFTER_DELETE_BOOK:
            const index = action.payload;
            const books = state.books.filter((book, id)=> {
             
                return id != index})

                return {
                    ...state,
                    books: [...books]
                };
            
               
        case fromBookAction.AFTER_UPDATE_BOOK:           
      

            const updatedBook = {...state.books[action.payload.id], ...action.payload.book}
            const updatedBooks = [...state.books]
            updatedBooks[action.payload.id] = updatedBook
            
            return {
                ...state,
                books: updatedBooks
            }
           
        default:
           return state;

    }
}