import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Book } from "./book.model";
import * as fromAppState from '../store/app.reducer';
import { map, switchMap, take } from "rxjs/operators";
import * as fromBookActions from './store/book.actions';
import { Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})
export class BooksResolverService implements Resolve<Book[]> {

    constructor(private store:Store<fromAppState.AppState>, private action$: Actions) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    
        return this.store.select('books').pipe(take(1),
        map(bookState => {
             
            return bookState.books
        }),
        switchMap((books: Book[]   )=> {
                              
            if(books.length === 0) {
                
                
                this.store.dispatch(new fromBookActions.FetchBooks())
            
                
                        
                return this.action$.pipe(ofType(fromBookActions.SET_BOOKS), take(1))
            }
            else {
 
                return of(books)
            }
        })
        )
    }
    
}