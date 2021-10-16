import { Router } from 'express';
import { authRoutes } from './auth/route.auth';
import { userRoutes } from './user/route.user';
import { movieRoutes } from './movie/route.movie';
import { actorRoutes } from './actor/route.actor';


export const apiRoutesNA: Router = Router();

apiRoutesNA.use( authRoutes );
apiRoutesNA.use( userRoutes );
apiRoutesNA.use( actorRoutes );
apiRoutesNA.use( movieRoutes );