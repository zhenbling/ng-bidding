import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindPwdComponent } from './components/find-pwd/find-pwd.component';
import { routing } from './login.routing';
import { LoginComponent } from './login.component';
import { LoginPartComponent } from './components/login-part/login-part.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {InputComponent} from '../register/components/input/input.component';
// import {PhoneCheckCodeComponent} from '../register/components/phone-check-code/phone-check-code.component';
import {SharedModule} from '../../shared/shared.module';
import {LoginPartService} from './components/login-part/login-part.service';
import {BaseInfoService} from "../register/components/base-info/base-info.service";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    FindPwdComponent,
    LoginPartComponent,
    // InputComponent,
    // PhoneCheckCodeComponent
  ],
  providers: [
    LoginPartService,
    BaseInfoService
  ]
})
export class LoginModule { }
