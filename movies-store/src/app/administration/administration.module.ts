import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MovieManagementComponent } from './movie-management/movie-management.component';
import { ActorManagementComponent } from './actor-management/actor-management.component';
import { DirectorManagementComponent } from './director-management/director-management.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
	{ path: '', component: AdministrationComponent },
	{ path: 'movies', component: MovieManagementComponent, pathMatch: 'full' },
	{ path: 'actors', component: ActorManagementComponent },
	{ path: 'directors', component: DirectorManagementComponent },
	{ path: 'categories', component: CategoryManagementComponent },
  { path: 'reports', component: ReportComponent },
	{ path: 'users', component: UserComponent },
];

@NgModule({
  declarations: [
    AdministrationComponent,
    UserComponent,
    MovieManagementComponent,
    ActorManagementComponent,
    DirectorManagementComponent,
    CategoryManagementComponent,
    ReportComponent,
  ],
  imports: [
    CommonModule,
		RouterModule.forChild( routes ),
  ]
})
export class AdministrationModule { }
