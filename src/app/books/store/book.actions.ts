import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store"
import { Book } from "../book.model";

export const SET_BOOKS = "[Books] Set Books"
export const FETCH_BOOKS = '[Books] Fetch Books'
export const ADD_BOOKS = '[Books] Add Books'
export const ONADD_BOOKS = '[Books] On Add Books'
export const AFTER_DELETE_BOOK = '[Books] After Delete Books'
export const DELETE_BOOK = '[Books] DELETE BOOK'



export class SetBooks implements Action {
    readonly type = SET_BOOKS;
    constructor(public payload: Book[]) {}
 }

 export class FetchBooks implements Action {
    readonly type = FETCH_BOOKS;
 }

 export class AfterAddBooks implements Action {
    readonly type = ONADD_BOOKS;
    constructor(public payload: Book) {}
 }

 export class AddBooks implements Action {
    readonly type = ADD_BOOKS;
    constructor(public payload: Book) {}
 }

 export class DeleteBook implements Action {
    readonly type = DELETE_BOOK;

    constructor(public payload: {id: number, bookId: number}) {}
 }

 export class AfterDeleteBook implements Action {
    readonly type = AFTER_DELETE_BOOK;

    constructor(public payload: number) {}
 }



export type BookActions = SetBooks | FetchBooks | AddBooks | AfterDeleteBook;