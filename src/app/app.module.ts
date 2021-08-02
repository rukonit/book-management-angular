import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponentComponent } from './books/books-component.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponentComponent,
    BookListComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
