
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BannerComponent} from './components/banner/banner.component';
import {CatagoryListComponent} from './components/catagory-list/catagory-list.component';
import {RecorderComponent} from './components/recorder/recorder.component';
import {routing} from './index.routing';
import {IndexComponent} from './index.component';
import { GoodsItemComponent } from './components/catagory-list/goods-item/goods-item.component';



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
    RecorderComponent,
    GoodsItemComponent
  ],
  providers: []

})
export class IndexModule {

}
