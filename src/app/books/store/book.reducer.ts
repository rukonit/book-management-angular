import { from } from "rxjs";
import { Book } from "../book.model";
import * as fromBookAction from './book.actions'

export interface State {
    books: Book[],
    isLoading: boolean;
    error: any;
}

const initialState: State = {
    books: [],
    isLoading: false,
    error: null
}

export function bookReducer(state: State = initialState, action: fromBookAction.BookActions) {

    switch(action.type) {
        case fromBookAction.SET_BOOKS:
        console.log([...state.books, ...action.payload]);
        
        return {
            ...state,
            books: [...action.payload],
            isLoading: false
        }

         case fromBookAction.AFTER_DELETE_BOOK:
            const index = action.payload;
            const books = state.books.filter((book, id)=> {
             
                return id != index})

                return {
                    ...state,
                    books: [...books],
                    isLoading: false
                };
            
               
        case fromBookAction.AFTER_UPDATE_BOOK:           
      

            const updatedBook = {...state.books[action.payload.id], ...action.payload.book}
            const updatedBooks = [...state.books]
            updatedBooks[action.payload.id] = updatedBook
            
            return {
                ...state,
                books: updatedBooks,
                isLoading: false
            }

      

        case fromBookAction.LOADINING_FAIL:

           return {
               ...state,
               isLoading: false,
               error: action.payload.message
               
               
           }

           
        default:
           return state;

    }
}