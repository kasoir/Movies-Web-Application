import { Router } from "express";
import { getByMovies } from './functions.movie';

export const movieRoutes: Router = Router();

movieRoutes.route( '/movie/:key?/:value?' ).get( getByMovies );