import { from } from "rxjs";
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
         
        return {
            ...state,
            books: [...state.books, ...action.payload]
        }

        // case fromBookAction.ADD_BOOKS:
        //    const book = new Book(action.payload.title,
        //         action.payload.author,
        //         action.payload.coverPhotoURL,
        //         action.payload.isbnNumber,
        //         action.payload.price,
        //         action.payload.language

        //         )

        //         return {
        //             ...state,
        //             books:  [...state.books, book]
        //         }

         case fromBookAction.AFTER_DELETE_BOOK:
            const index = action.payload;
          
            

            const books = state.books.filter((book, id)=> {
             
                return id != index})
                       

            return {
                ...state,
                books: [...books]
            }
        
           

       
        default:
           return state;

    }
}