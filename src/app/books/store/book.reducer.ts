import { Book } from "../book.model";
import * as fromBookAction from './book.actions'

export interface State {
    books: Book[]
}

const initialState: State = {
    books: []
    // [new Book("Story of My Life", 
    // "Rukon Khan", 
    // "https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg",
    // 12345,
    // 100,
    // "English")]
}

export function bookReducer(state: State = initialState, action: fromBookAction.BookActions) {

    switch(action.type) {
        case fromBookAction.SET_BOOKS:
        console.log('called');
        
        return {
            ...state,
            books: [...state.books, ...action.payload]
        }

       
        default:
           return state;

    }
}