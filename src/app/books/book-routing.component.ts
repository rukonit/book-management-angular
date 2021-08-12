import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BooksComponentComponent } from "./books-component.component";
import { BooksResolverService } from "./books-resolver.service";
import { LandingPageComponent } from "../landing-page/landing-page.component";

const routes: Routes = [
    {
        path: '', component: BooksComponentComponent,
        children: [
           
            {path: '', component: BookListComponent, resolve: [BooksResolverService]},
            {path: 'new', component: BookEditComponent},
            {path: ':id', component: BookDetailsComponent, resolve: [BooksResolverService]},
            {path: ':id/edit', component: BookEditComponent, resolve: [BooksResolverService]}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BooksRouting {}