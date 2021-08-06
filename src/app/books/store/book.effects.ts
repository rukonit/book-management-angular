import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import * as fromAppState from '../../store/app.reducer';
import { Book } from "../book.model";
import * as fromBookActions from '../store/book.actions';


@Injectable()
export class BookEffects {

    constructor(private action$: Actions, private http: HttpClient, private store: Store<fromAppState.AppState>) {}

    @Effect()
    fetchBooks = this.action$.pipe(ofType(fromBookActions.FETCH_BOOKS),
    switchMap(()=>{
        return this.http.get<Book[]>(environment.baseUrl + "/rest/books")}),
        map(books => {
           
            
            return new fromBookActions.SetBooks(books);
        })
        )
}