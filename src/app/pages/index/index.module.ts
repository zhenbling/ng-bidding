
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BannerComponent} from './components/banner/banner.component';
import {CatagoryListComponent} from './components/catagory-list/catagory-list.component';
import {RecorderComponent} from './components/recorder/recorder.component';
import {routing} from './index.routing';
import {IndexComponent} from './index.component';
import { GoodsItemComponent } from './components/catagory-list/goods-item/goods-item.component';
import {CatagoryModule} from '../catagory-detail/catagory.module';
import {DetailListComponent} from './components/detail-list/detail-list.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    routing,
    CatagoryModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    BannerComponent,
    CatagoryListComponent,
    RecorderComponent,
    GoodsItemComponent,
    DetailListComponent
  ],
  providers: []

})
export class IndexModule {

}
