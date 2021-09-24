import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Movie } from 'models/movie.model';
import { AuthService } from 'src/app/auth.service';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	animations: [
		trigger('routerTransition', [
			transition('* <=> *', [
				query(':enter, :leave', style({ position: 'absolute', width: '100%', top: '0', left: '0' }), { optional: true }),
				query(':enter', style({ opacity: 0 }), { optional: true }),
				query(':leave', animateChild(), { optional: true }),
				group([
					query(':leave', [animate('.5s ease-out', style({ opacity: 0 }))], { optional: true }),
					query(':enter', [animate('.5s ease-out', style({ opacity: 1 }))], { optional: true })
				]),
				query(':enter', animateChild(), { optional: true })
			]),
		])]
})
export class HomePageComponent implements OnInit {

	public movies: Movie[] = [];
	public responsiveOptions: any;

	constructor(
		private movieService: MoviesService,
		private authService: AuthService,
	) {
		this.responsiveOptions = [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '768px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '560px',
				numVisible: 1,
				numScroll: 1
			}
		];
	}

	async ngOnInit() {
		await this.authService.verifyUserToken()
		this.movies = await this.movieService.getBy();
	}
	getAnimationState(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animateState;
	}
}
