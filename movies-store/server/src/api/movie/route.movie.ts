import { Router } from "express";
import { getByMovies, putMovie } from './functions.movie';

export const movieRoutes: Router = Router();

movieRoutes.route( '/movie/:key?/:value?' ).get( getByMovies );
movieRoutes.route( '/movie/updateMovie' ).put( putMovie );