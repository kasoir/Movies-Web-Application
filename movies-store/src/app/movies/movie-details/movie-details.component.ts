import { Component, OnInit } from '@angular/core';
import { Movie } from 'models/movie.model';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MoviesService } from '../movies.service';
import { MessageService } from 'primeng/api';

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
    private movieService: MoviesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.done = true;
    }
  }

  submitRating = async () => {
    this.canRate = false;
    const result = await this.movieService.updateMovie(this.data);
    if (result) {
      this.messageService.add({ summary: 'Success', detail: 'Rate added successfully...' });
    }
  }

  downloadMovie = async (form: NgForm) => {

  }
}
