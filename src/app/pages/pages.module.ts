/**
 * Created by jason on 2017/12/12.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {CoreModule} from '../core/core.module';
import { LoginComponent } from './login/login.component';

import { CatagoryDetailComponent } from './catagory-detail/catagory-detail.component';


@NgModule({
  imports: [
    CoreModule,
    routing],
  declarations: [
    PagesComponent,
    LoginComponent,
    CatagoryDetailComponent
  ]
})
export class PagesModule {
}
