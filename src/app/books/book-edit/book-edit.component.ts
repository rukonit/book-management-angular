import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../book.model';
import * as fromAppStore from '../../store/app.reducer';
import * as fromBooksAction from '../store/book.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  id: number = null;
  idInServer = null;
  bookForm: FormGroup;
  editMode:boolean;
  subForm: Subscription;
  @ViewChild('cImage') image: ElementRef;
  imgURL: string;
  
  

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromAppStore.AppState>) { }

  ngOnInit(): void {
 
        this.route.params.subscribe(
      (params: Params) => {
       this.id = params['id'];

       
       this.editMode = params['id'] != null;
       this.initForm()
      }
    )
   
    
  }

  onSubmit() {

    if(this.editMode) {

      this.store.dispatch(new fromBooksAction.UpdateBook({id: this.id, book:  {...this.bookForm.value, id: this.idInServer}}))
      
    }
    else {
      
      this.store.dispatch(new fromBooksAction.AddBooks(this.bookForm.value))
      }

    this.router.navigate([''], {relativeTo: this.route});

  }

  initForm() {
    let title = '';
    let author = ''
    let coverImageURL: string;
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
        this.book = book;
        
        this.idInServer= book.id;
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
        'isbnNumber': new FormControl(isbnNumber, Validators.required),
        'price': new FormControl(price, Validators.required),
        'language': new FormControl(language, Validators.required)
      }
    )
  }

onCancel() {
  this.router.navigate([''], {relativeTo: this.route})
}


}
