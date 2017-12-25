import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FindPwdComponent } from './components/find-pwd/find-pwd.component';
import {LoginPartComponent} from './components/login-part/login-part.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', component: LoginPartComponent },
      { path: 'findpwd', component: FindPwdComponent },
    ]
  }
];
export const routing = RouterModule.forChild(routes);
