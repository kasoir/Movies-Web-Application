import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorListComponent } from './director-list/director-list.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';



@NgModule({
  declarations: [
    DirectorListComponent,
    DirectorDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DirectorModule { }
