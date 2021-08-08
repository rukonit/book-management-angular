import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book.model';
import * as fromAppStore from '../../store/app.reducer';
import * as fromBooksAction from '../store/book.actions';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books!: Book[];

  booksSub: Subscription;

  constructor(private store: Store<fromAppStore.AppState>) { }

  ngOnInit(): void {
   this.booksSub = this.store.select("books").pipe(map(booksState => {
      return booksState.books;
    })).subscribe(
      (books: Book[]) => {
        
        this.books = books}
    )
  }

  ngOnDestroy() {
    this.booksSub.unsubscribe();
  }

}
