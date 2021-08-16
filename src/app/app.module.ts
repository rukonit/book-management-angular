import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { HttpClientModule} from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/store/book.effects';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuToggleDirective } from './header/menu-toggle.directive';


@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
        LandingPageComponent,
        MenuToggleDirective,
   
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects]),
    HttpClientModule,
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
