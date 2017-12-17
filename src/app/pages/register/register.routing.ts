import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component';
import {BaseInfoComponent} from './components/base-info/base-info.component';
import {FactoryInfoComponent} from './components/factory-info/factory-info.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
    { path: '', component: BaseInfoComponent },
    { path: 'factoryinfo', component: FactoryInfoComponent },
  ]
  }
]
export const routing = RouterModule.forChild(routes);
