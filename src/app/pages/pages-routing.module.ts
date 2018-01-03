/**
 * Created by jason on 2017/12/12.
 */
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {CatagoryDetailComponent} from './catagory-detail/catagory-detail.component';
import {DetailListComponent} from './index/components/detail-list/detail-list.component';


export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
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
      {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      },
      {
        path: 'catagorydetail',
        component: CatagoryDetailComponent
      },
      {
              path: 'detaillist',
              component: DetailListComponent
      },
      {
        path: 'mycenter',
        loadChildren: './my-center/my-center.module#MyCenterModule'
      }
    ]
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
