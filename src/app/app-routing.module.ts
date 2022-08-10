import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http404Component } from './core/http404/http404.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'problems',
    loadChildren: () => import('./problems/problems.module').then(m => m.ProblemsModule)
  },
  {
    path: '',
    component: Http404Component 
  },
  {
    path: '**',
    component: Http404Component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
