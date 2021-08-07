import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookItemComponent } from "./book-list/book-item/book-item.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BooksRouting } from "./book-routing.component";
import { BooksComponentComponent } from "./books-component.component";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        BooksComponentComponent,
        BookListComponent,
        BookItemComponent,
        BookDetailsComponent,
        BookEditComponent
    ],
    imports: [
        BooksRouting,
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})

export class BooksModule {}