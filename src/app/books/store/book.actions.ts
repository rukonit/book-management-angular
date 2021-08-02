import { Action } from "@ngrx/store"
import { Book } from "../book.model";

export const SET_BOOKS = "[Books] Set Books"
export const FETCH_BOOKS = '[Books] Fetch Books'

export class SetBooks implements Action {
    readonly type = SET_BOOKS;
    constructor(public payload: Book[]) {}
 }

 export class FetchBooks implements Action {
    readonly type = FETCH_BOOKS;
 }

export type BookActions = SetBooks | FetchBooks;