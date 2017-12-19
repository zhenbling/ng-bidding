
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BannerComponent} from './components/banner/banner.component';
import {CatagoryListComponent} from './components/catagory-list/catagory-list.component';
import {DetailListComponent} from './components/detail-list/detail-list.component';
import {routing} from './index.routing';
import {IndexComponent} from './index.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    IndexComponent,
    BannerComponent,
    CatagoryListComponent,
    DetailListComponent
  ],
  providers: []

})
export class IndexModule {

}
