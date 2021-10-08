import { Router } from "express";
import { getByMovies, getRecentlyMovies, putMovie } from './functions.movie';

export const movieRoutes: Router = Router();

movieRoutes.route( '/movie/:date' ).get( getRecentlyMovies );
movieRoutes.route( '/movie/:key?/:value?' ).get( getByMovies );
movieRoutes.route( '/movie/updateMovie' ).put( putMovie );