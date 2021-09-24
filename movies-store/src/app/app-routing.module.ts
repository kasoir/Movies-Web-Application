import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'movies', loadChildren: () => import('./movies/movies-list/movies-list.module').then(m => m.MoviesListModule) },
  { path: 'signIn', loadChildren: () => import('./sign/sign.module').then(m => m.SignModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
