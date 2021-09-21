// // TODO ALI TO REVIEW
// import { Request, Response, NextFunction } from 'express';
// import { StatusCodes as HttpStatus } from 'http-status-codes';
// import * as jwt from 'jsonwebtoken';
// // import * as dotenv from 'dotenv';
// import { settings } from '../../settings/setting';
// // import { OAuth2Client } from 'google-auth-library';
// // dotenv.config();
// const secret = settings.botJwtSecret;
// const tokenLifeSapn = settings.jwtTokenLifeTime;
// // const IOS_CLIENT_ID = process.env.IOS_CLIENT_ID || '';
// // const googleAuthClient = new OAuth2Client( IOS_CLIENT_ID );
// // const secret = process.env.JWT_SECRET || '';

// export const generateAuthToken = ( payload: any ) => {
// 	return jwt.sign( payload, secret, {
// 		expiresIn: `${ tokenLifeSapn }d`,
// 		algorithm: 'HS256',
// 	} );
// }

// export const verifyAuthToken = ( idToken: string ) => {
// 	try {
// 		return <UserTuple> jwt.verify( idToken, secret );
// 	} catch ( err ) {
// 		console.error( err );
// 		return null;
// 	}
// }


// export const getBotToken = () => {
// 	return 'Bot ' + jwt.sign( { message: "I am a bot" }, secret, {
// 		expiresIn: '1h',
// 		algorithm: 'HS256',
// 	} );
// }
// export const jwtBotAuth = async ( req: Request, res: Response, next: NextFunction ) => {
// 	const header = req.headers.authorization;

// 	if ( typeof header !== 'undefined' ) {
// 		const bearer = header.split( ' ' );
// 		const token = bearer[ 1 ];
// 		try {
// 			const payload = jwt.verify( token, secret );
// 			req[ 'botUser' ] = payload;
// 			next();
// 			return;
// 		} catch ( err ) {
// 			console.error( err );
// 			res.status( HttpStatus.FORBIDDEN ).json( err );
// 		}
// 	} else {
// 		//If header is undefined return Forbidden (403)
// 		res.sendStatus( HttpStatus.FORBIDDEN );
// 	}
// }
// // export const googleVerify = async ( token ) => {
// // 	const ticket = await googleAuthClient.verifyIdToken( {
// // 		idToken: token,
// // 		audience: IOS_CLIENT_ID,
// // 	} );
// // 	return ticket.getPayload();
// // }


