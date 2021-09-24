import * as jwt from 'jsonwebtoken';
import { User } from '../../models/user.model';
import { settings } from '../../settings/setting';
const secret = settings.botJwtSecret;
const tokenLifeSapn = settings.jwtTokenLifeTime;

export const generateAuthToken = ( payload: any ) => {
	return jwt.sign( payload, secret, {
		expiresIn: `${ tokenLifeSapn }d`,
		algorithm: 'HS256',
	} );
}

export const verifyAuthToken = ( idToken: string ) => {
	try {
		return <User> jwt.verify( idToken, secret );
	} catch ( err ) {
		console.error( err );
		return null;
	}
}


export const getBotToken = () => {
	return 'Bot ' + jwt.sign( { message: "I am a bot" }, secret, {
		expiresIn: '1h',
		algorithm: 'HS256',
	} );
}



