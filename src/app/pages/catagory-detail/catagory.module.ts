import {NgModule} from '@angular/core';
import {CatagoryDetailComponent} from './catagory-detail.component';
import {ClockComponent} from './components/clock/clock.component';
import {OrderItemComponent} from './components/order-item/order-item.component';
// import {StepperComponent} from './components/stepper/stepper.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
// import {StepperComponent} from '../../shared/stepper/stepper.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CatagoryDetailComponent,
    ClockComponent,
    OrderItemComponent,
    // StepperComponent
  ],
  providers: [],
  exports: [
    ClockComponent,
    // StepperComponent,
    OrderItemComponent
  ],
})
export class CatagoryModule {}
