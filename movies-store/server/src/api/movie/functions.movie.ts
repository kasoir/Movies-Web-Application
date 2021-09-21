import { NextFunction, Response, Request, RequestHandler } from 'express';
import { param } from 'express-validator';
import { apiValidator } from '../../utils/apiValidator';
import { getDefaultMovie, Movie } from '../../../../models/movie.model';
import * as pg from '../../lib.pool';
import { apiResponder } from '../../utils/apiResponder';

export const getByMovies: RequestHandler[] = [
	param('key').optional().isString(),
	param('value').optional(),
	apiValidator,
	apiResponder(async (req: Request, res: Response, next: NextFunction) => {
		let result: Movie[] = [];
		result = await getBy(req.params.key, req.params.value);
		return result || [];
	}),
];

const getBy = async (key?: string, value?: string): Promise<Movie[]> => {
	let movies: Movie[];

	if ((!key && value) || (key && !value)) throw new Error('Invalid arguments');

	let query = `SELECT * FROM public."movie"`;
	const queryValues: any[] = [];
	if (key && value && Object.keys(getDefaultMovie()).includes(key.trim())) {
		query += ` WHERE "${key.trim()}"= $1`;
		queryValues.push(value);
	}
	query += ' ;';
	movies = (await pg.db.query<Movie>(query, queryValues)).rows;
	return movies;
}