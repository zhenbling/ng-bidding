import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index.component';

import {CatagoryListComponent} from './components/catagory-list/catagory-list.component';
import {RecorderComponent} from './components/recorder/recorder.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: CatagoryListComponent },
      { path: 'recorder', component: RecorderComponent },
    ]
  }
]
export const routing = RouterModule.forChild(routes)
