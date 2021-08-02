import { Book } from "../book.model";
import * as fromBookAction from './book.actions'

export interface State {
    books: Book[]
}

const initialState: State = {
    books: [new Book("Story of My Life", 
    "Rukon Khan", 
    "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
    12345,
    100,
    "English")]
}

export function bookReducer(state: State = initialState, action: fromBookAction.BookActions) {

    switch(action.type) {
        case fromBookAction.SET_BOOKS:

        return {
            ...state
        }
        default:
           return state;

    }
}