import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public movies: any[] = [];
  constructor(
    private movieService: MoviesService,
  ) { }

  async ngOnInit () {
    this.movies = await this.movieService.getBy();
    console.log(this.movies);
  }

}
