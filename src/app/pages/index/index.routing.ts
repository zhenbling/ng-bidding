import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index.component';

import {CatagoryListComponent} from './components/catagory-list/catagory-list.component';
import {DetailListComponent} from './components/detail-list/detail-list.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: CatagoryListComponent },
      { path: 'detaillist', component: DetailListComponent },
    ]
  }
]
export const routing = RouterModule.forChild(routes)
