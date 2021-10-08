import { NextFunction, Response, Request, RequestHandler } from 'express';
import { body, param } from 'express-validator';
import { apiValidator } from '../../utils/apiValidator';
import { getDefaultMovie, Movie } from '../../../../models/movie.model';
import * as pg from '../../lib.pool';
import { apiResponder } from '../../utils/apiResponder';
import { generateDeleteQuery, generateInsertQuery, generateUpdateQuery } from '../../lib.sqlUtils';
import { getnow } from '../../utils/getnow';

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
export const getRecentlyMovies: RequestHandler[] = [
	param('date').isString(),
	apiValidator,
	apiResponder(async (req: Request, res: Response, next: NextFunction) => {
		let result: Movie[] = [];
		result = await getRecently(req.params.date);
		return result || [];
	}),
];
export const putMovie: RequestHandler[] = [
	body('id').exists().bail().isString(),
	apiValidator,
	apiResponder(async (req: Request) => {
		const payload: Movie = req.body;
		const result = await updateMovie(payload);
		return result || {};
	}),
];
export const deleteMovie: RequestHandler[] = [
	body('id').exists().bail().isString(),
	apiValidator,
	apiResponder(async (req: Request) => {
		const payload: Movie = req.body;
		const result = await removeMovie(payload);
		return result || {};
	}),
];
export const postMovie: RequestHandler[] = [
	body('id').optional().bail().isString(),
	body('name').exists().bail().isString(),
	body('category').exists().bail().isString(),
	apiValidator,
	apiResponder(async (req: Request) => {
		const payload: Movie = req.body;
		const result = await createMovie(payload);

		return result || {};
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
const getRecently = async (date: string): Promise<Movie[]> => {
	let movies: Movie[];
	const currentDate = getnow()
	let query = `SELECT * FROM public."movie" Where "uploadDate"<$1 And "uploadDate">$2`;
	const queryValues: any[] = [currentDate,date];
	movies = (await pg.db.query<Movie>(query, queryValues)).rows;
	return movies;
}

const updateMovie = async (movie: Movie) => {
	const query = generateUpdateQuery(`public."movie"`, getDefaultMovie(), movie, true);
	query.text += `WHERE id =$${++query.paramCounter}`;
	query.values.push(movie.id);
	const result = (await pg.db.query<Movie>(query.text, query.values)).rows[0];
	return result;
}
const removeMovie = async (movie: Movie) => {
	const query = generateDeleteQuery(`public."movie"`, { id: movie.id });
	const result = (await pg.db.query<Movie>(query.text, query.values)).rows[0];
	return result;
}
const createMovie = async (movie: Movie) => {
	const query = generateInsertQuery(`public."movie"`, getDefaultMovie(), movie, true, true);
	const result = (await pg.db.query<Movie>(query.text, query.values)).rows[0];
	return result;
}