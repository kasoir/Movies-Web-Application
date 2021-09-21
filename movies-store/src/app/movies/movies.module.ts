import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    SkeletonModule,
    TableModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    NgbModule,
    ButtonModule,
    RippleModule
  ]
})
export class MoviesModule { }
