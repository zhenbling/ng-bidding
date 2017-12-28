/**
 * Created by jason on 2017/12/12.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '../core/core.module';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {CatagoryModule} from './catagory-detail/catagory.module';




@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    routing,
    ReactiveFormsModule,
    CatagoryModule
  ],
  declarations: [
    PagesComponent
  ],
  providers: [
  ]
})
export class PagesModule {
}
