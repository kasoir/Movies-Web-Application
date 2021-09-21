import { Router } from 'express';
import { movieRoutes } from './movie/route.movie';

export const apiRoutes: Router = Router();

apiRoutes.use( movieRoutes );