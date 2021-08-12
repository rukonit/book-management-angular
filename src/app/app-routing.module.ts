import { NgModule } from "@angular/core";
import { PreloadAllModules, Router, RouterModule, Routes } from "@angular/router";
import { BooksComponentComponent } from "./books/books-component.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const appRoutes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'books', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', loadChildren: ()=> import('./books/books.module').then(m => m.BooksModule)}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}