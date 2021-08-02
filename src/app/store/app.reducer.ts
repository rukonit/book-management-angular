import { ActionReducerMap } from '@ngrx/store'
import * as fromBooks from '../books/store/book.reducer'

export interface AppState {
    books: fromBooks.State
}

export const reducers: ActionReducerMap<AppState, any> = {
    books: fromBooks.bookReducer
}