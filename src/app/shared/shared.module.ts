import {NgModule} from '@angular/core';
import {FinalPriceComponent} from './final-price/final-price.component';
import {CommonModule} from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import {
  BsModalService, ComponentLoaderFactory, ModalModule, PaginationConfig, PaginationModule,
  PositioningService
} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    PaginationModule
  ],
  declarations: [
    FinalPriceComponent,
    PaginationComponent
  ],
  providers: [
    PaginationConfig,
    BsModalService,
    ComponentLoaderFactory,
    PositioningService
  ],
  exports: [
    FinalPriceComponent,
    PaginationComponent
  ],
  entryComponents: [
    FinalPriceComponent
  ]
})
export class SharedModule {}
