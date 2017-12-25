/**
 * Created by jason on 2017/12/12.
 */
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';


import {CatagoryDetailComponent} from './catagory-detail/catagory-detail.component';
import {LoginComponent} from './login/login.component';

// import {LoginPartComponent} from './login/components/login-part/login-part.component';
// import {FindPwdComponent} from './login/components/find-pwd/find-pwd.component';



// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
    // component: LoginComponent
  },

  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      // { path: 'index', component: IndexComponent },
      {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      },
      {
        path: 'catagorydetail',
        component: CatagoryDetailComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
