import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromBookActions from '../store/book.actions';
import * as fromAppState from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book:Book;
  id: number;

  bookSub: Subscription;
  constructor(private store: Store<fromAppState.AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
 console.log("Details initialized");
 
    this.route.params.pipe(map(
      param => {
        return param['id'];
      }),
      switchMap(id=> {
        this.id = id
        return this.store.select('books').pipe(map(bookState=>{

        
          return bookState.books.find((book, index)=>{
            return index == id;
          })
        }))
      })
    ) 
    .subscribe((book: Book) => {
      this.book = book
  
      
    })
    
  }

  ngOnDestroy() {
  
  }

  onEdit() {
    this.router.navigate(['books', this.id,'edit'])
  }

  onDelete() {
    this.store.dispatch(new fromBookActions.DeleteBook({id: this.id, bookId: this.book.id}))
    this.router.navigate([''], {relativeTo: this.route})
  } 

}
