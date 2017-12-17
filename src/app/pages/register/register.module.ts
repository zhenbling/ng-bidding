/**
 * Created by jason on 2017/12/15.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {BaseInfoComponent} from './components/base-info/base-info.component';
import { FactoryInfoComponent } from './components/factory-info/factory-info.component';
import {routing} from './register.routing';
import {RegisterComponent} from './register.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    routing,
    // CoreModule
  ],
  declarations: [
    RegisterComponent,
    BaseInfoComponent,
    FactoryInfoComponent
  ],
  providers: []

})
export class RegisterModule {

}
