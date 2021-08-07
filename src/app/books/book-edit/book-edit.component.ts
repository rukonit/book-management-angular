import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../book.model';
import * as fromAppStore from '../../store/app.reducer';
import * as fromBooksAction from '../store/book.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  id: number = null;
  bookForm: FormGroup;
  editMode:boolean;
  subForm: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<fromAppStore.AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
       this.id = params['id'];
       console.log(this.id);
       
       this.editMode = params['id'] != null;
       this.initForm()
      }
    )
   
    
  }

  onSubmit() {

  }

  initForm() {
    let title = '';
    let author = ''
    let coverImageURL  = '';
    let isbnNumber:Number;
    let price: Number;
    let language  = '';

    if(this.editMode) {

    this.subForm = this.store.select('books').pipe(
   
    map(bookState=>{
      return bookState.books.find((book, index) => {
   
        return index == this.id;
      })
    })
    ).subscribe(book =>
      {
        
         
        title = book.title;
        author = book.author;
        coverImageURL = book.coverPhotoURL;
        isbnNumber = book.isbnNumber;
        price = book.price;
        language = book.language;
              
        
      }
      
    )
    }
   
    this.bookForm = new FormGroup(
      {
        'title': new FormControl(title, Validators.required),
        'author': new FormControl(author, Validators.required),
        'coverPhotoURL': new FormControl(coverImageURL, Validators.required),
        'isbnNumber': new FormControl(isbnNumber),
        'price': new FormControl(price),
        'language': new FormControl(language, Validators.required)
      }
    )
  }

}
