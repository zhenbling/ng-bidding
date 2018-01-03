import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component';
import {BaseInfoComponent} from './components/base-info/base-info.component';
import {FactoryInfoComponent} from './components/factory-info/factory-info.component';
import {WaitAuditComponent} from './components/wait-audit/wait-audit.component';
import {AuditResultComponent} from './components/audit-result/audit-result.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
    { path: '', component: BaseInfoComponent },
    { path: 'factoryinfo', component: FactoryInfoComponent },
    { path: 'waitaudit', component: WaitAuditComponent },
      { path: 'auditresult', component: AuditResultComponent }
  ]
  }
]
export const routing = RouterModule.forChild(routes);
