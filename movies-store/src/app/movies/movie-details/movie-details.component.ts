import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public data: any;
  public done = false;
  canRate = true;
  currentRate = 0;
  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
    if( this.data ){
      this.done = true;
    }
  }

  submitRating(){
    console.log('rating now is', this.data.rate);
    this.canRate = false;
  }

}
