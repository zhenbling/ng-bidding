import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPwdComponent } from './components/find-pwd/find-pwd.component';
import { routing } from './login.routing';
import { LoginComponent } from './login.component';
import { LoginPartComponent } from './components/login-part/login-part.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    LoginComponent,
    FindPwdComponent,
    LoginPartComponent]
})
export class LoginModule { }
