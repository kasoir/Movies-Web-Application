import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'welcome-page', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'movies', loadChildren: () => import('./movies/movies-list/movies-list.module').then(m => m.MoviesListModule) },
  { path: 'signIn', loadChildren: () => import('./sign/sign.module').then(m => m.SignModule) },
  { path: 'administration', loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule) },
	{ path: '', redirectTo: 'welcome-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
