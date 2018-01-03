/**
 * Created by jason on 2017/12/15.
 */
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BaseInfoComponent} from './components/base-info/base-info.component';
import { FactoryInfoComponent } from './components/factory-info/factory-info.component';
import {routing} from './register.routing';
import {RegisterComponent} from './register.component';
import {CommonModule} from '@angular/common';
import { WaitAuditComponent } from './components/wait-audit/wait-audit.component';
import { AuditResultComponent } from './components/audit-result/audit-result.component';
// import { InputComponent } from './components/input/input.component';
// import { UploadImgComponent } from './components/upload-img/upload-img.component';
// import { StepComponent } from './components/step/step.component';
// import { PhoneCheckCodeComponent } from './components/phone-check-code/phone-check-code.component';
import {SharedModule} from '../../shared/shared.module';
import {BaseInfoService} from './components/base-info/base-info.service';
import {InputComponent} from '../../shared/input/input.component';
import {UploadImgComponent} from '../../shared/upload-img/upload-img.component';
import {StepComponent} from '../../shared/step/step.component';
import {PhoneCheckCodeComponent} from '../../shared/phone-check-code/phone-check-code.component';


// import {RegisterService} from "./register.service";
// import {BaseInfoService} from './components/base-info/base-info.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    BaseInfoComponent,
    FactoryInfoComponent,
    WaitAuditComponent,
    AuditResultComponent,
    // InputComponent,
    // UploadImgComponent,
    // StepComponent,
    // PhoneCheckCodeComponent
  ],
  providers: [
    BaseInfoService
  ]

})
export class RegisterModule {

}
