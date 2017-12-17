/**
 * Created by jason on 2017/12/12.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {CoreModule} from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    CoreModule,
    routing],
  declarations: [
    PagesComponent,
    LoginComponent,
    // IndexComponent,
    // RegisterComponent
  ]
})
export class PagesModule {
}
