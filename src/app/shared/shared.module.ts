import {NgModule} from '@angular/core';
import {FinalPriceComponent} from './final-price/final-price.component';
import {CommonModule} from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import {
  BsModalService, ComponentLoaderFactory, ModalModule, PaginationConfig, PaginationModule, PositioningService

} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {InputComponent} from './input/input.component';
import {PhoneCheckCodeComponent} from './phone-check-code/phone-check-code.component';
import {UploadImgComponent} from './upload-img/upload-img.component';
import {DropDownMenuComponent} from './drop-down-menu/drop-down-menu.component';
import { CommonClockComponent } from './common-clock/common-clock.component';
import {StepperComponent} from './stepper/stepper.component';
import {StepComponent} from './step/step.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    PaginationModule
  ],
  declarations: [
    FinalPriceComponent,
    PaginationComponent,
    InputComponent,
    PhoneCheckCodeComponent,
    UploadImgComponent,
    StepperComponent,
    DropDownMenuComponent,
    CommonClockComponent,
    StepComponent
  ],
  providers: [
    PaginationConfig,
    BsModalService,
    ComponentLoaderFactory,
    PositioningService
  ],
  exports: [
    FinalPriceComponent,
    PaginationComponent,
    InputComponent,
    PhoneCheckCodeComponent,
    UploadImgComponent,
    StepperComponent,
    DropDownMenuComponent,
    CommonClockComponent,
    StepComponent
  ],
  entryComponents: [
    FinalPriceComponent
  ]
})
export class SharedModule {}
