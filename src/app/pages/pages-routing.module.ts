/**
 * Created by jason on 2017/12/12.
 */
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {RegisterModule} from './register/register.module';
import {RegisterComponent} from "./register/register.component";

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // { path: 'weather', loadChildren: './weather/weather.module#WeatherModule' }
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
      {path: 'index',
        loadChildren: './index/index.module#IndexModule'
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
