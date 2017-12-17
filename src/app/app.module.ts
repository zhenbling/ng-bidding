
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';


import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
// import { PagesComponent } from './pages/pages.component';
import {PagesModule} from './pages/pages.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    routing,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
