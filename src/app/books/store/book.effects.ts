import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, take, withLatestFrom } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as fromAppState from '../../store/app.reducer';
import { Book } from "../book.model";
import * as fromBookActions from '../store/book.actions';


@Injectable()
export class BookEffects {

    bookId: number;
    stateBookId: number;
    currentBook: Book;

    constructor(private action$: Actions, private http: HttpClient, private store: Store<fromAppState.AppState>) {}

    handleError(errorRes: any) {
               console.log(errorRes);
               
        return of(new fromBookActions.LoadingFail(errorRes))
        
    }
    @Effect()
    fetchBooks = this.action$.pipe(ofType(fromBookActions.FETCH_BOOKS),
    switchMap(()=>{
      
        return this.http.get<Book[]>(environment.baseUrl + "/rest/books")
        .pipe( 
            map(books => {
        
                
            return new fromBookActions.SetBooks(books);
        }),
        catchError(errorRes => {
                              
           return this.handleError(errorRes)
        })
        )
    })
    
      
        
        )

    @Effect()
    addBooks = this.action$.pipe(ofType(fromBookActions.ADD_BOOKS),
    switchMap(((book: fromBookActions.AddBooks)=> {
        this.currentBook = book.payload
        return this.http.post(environment.baseUrl + "/rest/books", 	book.payload, {headers: {
            'content-type': 'application/json'
        }}).pipe(
            map(
                () => { 
                    return new fromBookActions.FetchBooks();
                }
            ),
            catchError(errorRes => {
                      
                return this.handleError(errorRes)
             })
        )
        
    })),
    
 
    )

    @Effect()
    deleteBooks = this.action$.pipe(ofType(fromBookActions.DELETE_BOOK),
    switchMap((ids: fromBookActions.DeleteBook) => {
        this.stateBookId = ids.payload.id;      
        return this.http.delete<Book[]>(environment.baseUrl + "/rest/books/" + ids.payload.bookId).pipe(
            map((data)=>{
          
                return new fromBookActions.AfterDeleteBook(this.stateBookId);
            }),
            catchError(errorRes => {
                      
                return this.handleError(errorRes)
             })

        )
    }),
   
    )

    @Effect()
    updateBook = this.action$.pipe(ofType(fromBookActions.UPDATE_BOOK),
    switchMap((details: fromBookActions.UpdateBook) => {
        this.stateBookId = details.payload.id;
        this.currentBook = details.payload.book;

        console.log(this.currentBook);
        
        return this.http.put<Book[]>(environment.baseUrl + "/rest/books", details.payload.book, {headers: {
            'content-type': 'application/json'
        }}).pipe(
            map((message)=>{
             
                return new fromBookActions.AfterUpdateBook({id: this.stateBookId, book: this.currentBook})
            }),
            catchError(errorRes => {
                      
                return this.handleError(errorRes)
             })

        )

    }),

    
    )
}