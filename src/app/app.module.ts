
import { NgModule } from '@angular/core';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
// import { PagesComponent } from './pages/pages.component';
import {PagesModule} from './pages/pages.module';

import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    PagesModule,

    routing,
    ReactiveFormsModule,
    CoreModule.forRoot(),
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
