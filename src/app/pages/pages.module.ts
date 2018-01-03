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
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import {DetailListComponent} from './index/components/detail-list/detail-list.component';
import {IndexModule} from './index/index.module';
// import {ClockComponent} from './catagory-detail/components/clock/clock.component';




@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    routing,
    ReactiveFormsModule,
    CatagoryModule,
    IndexModule
  ],
  declarations: [
    PagesComponent
  ],
  providers: [
  ]
})
export class PagesModule {
}
