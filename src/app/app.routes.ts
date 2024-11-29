import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', title: 'Rock, paper or scissors? | Home', loadComponent: ()=> import('./views/home/home.component')},
  {path: '**', redirectTo: ''}
];
