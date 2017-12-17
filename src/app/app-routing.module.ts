import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/index' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
