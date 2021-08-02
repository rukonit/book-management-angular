import { Action } from "@ngrx/store"
import { Book } from "../book.model";

export const SET_BOOKS = "[Books] Set Books"

export class SetBooks implements Action {
    type: string = SET_BOOKS;
    constructor(public payload: Book[]) {}
    
    
}

export type BookActions = SetBooks