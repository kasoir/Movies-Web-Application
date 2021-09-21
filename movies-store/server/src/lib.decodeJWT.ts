// import { Request, Response, NextFunction } from "express";
// import { StatusCodes } from "http-status-codes";
// import { jwtBotAuth, verifyAuthToken } from "./lib.auth";

// export const decodeToken = async ( req: Request, res: Response, next: NextFunction ) => {
// 	if ( req.headers?.authorization ) {
// 		const idToken = req.headers.authorization;
// 		if ( idToken.split( ' ' )[ 0 ] === 'Bot' ) {
// 			await jwtBotAuth( req, res, next );
// 			return;
// 		}
// 		try {
// 			const decodedToken = verifyAuthToken( idToken );
// 			if ( decodedToken === null ) {
// 				return res.status( StatusCodes.UNAUTHORIZED ).json( { error: 'Unauthorized access!' } );
// 			}
// 			req[ 'currentUser' ] = decodedToken;
// 		} catch ( err ) {
// 			console.log( err );
// 			next( err );
// 			return err;
// 		}
// 		next();
// 		return;
// 	} else {
// 		return res.status( StatusCodes.UNAUTHORIZED ).json( { error: 'Unauthorized access!' } );
// 	}
// }
