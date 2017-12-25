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
// import { WaitAuditComponent } from './components/wait-audit/wait-audit.component';
// import { AuditResultComponent } from './components/audit-result/audit-result.component';
// import {BaseInfoService} from './components/base-info/base-info.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    RegisterComponent,
    BaseInfoComponent,
    FactoryInfoComponent,
    // WaitAuditComponent,
    // AuditResultComponent,
  ],
  providers: [
    // BaseInfoService
  ]

})
export class RegisterModule {

}
