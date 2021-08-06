import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponentComponent } from './books/books-component.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { HttpClientModule} from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/store/book.effects';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponentComponent,
    BookListComponent,
    BookItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
