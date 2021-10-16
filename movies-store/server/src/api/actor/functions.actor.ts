import { NextFunction, Response, Request, RequestHandler } from 'express';
import { body } from "express-validator";
import { Actor, getDefaultActor } from "../../../../models/actor.model";
import { generateDeleteQuery, generateInsertQuery, generateUpdateQuery } from "../../lib.sqlUtils";
import { apiResponder } from "../../utils/apiResponder";
import { apiValidator } from "../../utils/apiValidator";
import * as pg from '../../lib.pool';


export const putActor: RequestHandler[] = [
	body('id').exists().bail().isString(),
	apiValidator,
	apiResponder(async (req: Request, res: Response, next: NextFunction) => {
		const payload: Actor = req.body;
		const result = await updateActor(payload);
		return result || {};
	}),
];
export const deleteActor: RequestHandler[] = [
	body('id').exists().bail().isString(),
	apiValidator,
	apiResponder(async (req: Request, res: Response, next: NextFunction) => {
		const payload: Actor = req.body;
		const result = await removeActor(payload);
		return result || {};
	}),
];
export const postActor: RequestHandler[] = [
	body('id').optional().bail().isString(),
	body('name').exists().bail().isString(),
	body('category').exists().bail().isString(),
	apiValidator,
	apiResponder(async (req: Request, res: Response, next: NextFunction) => {
		const payload: Actor = req.body;
		const result = await createActor(payload);

		return result || {};
	}),
];


const updateActor = async (actor: Actor) => {
	const query = generateUpdateQuery(`public."movie"`, getDefaultActor(), actor, true);
	query.text += `WHERE id =$${++query.paramCounter}`;
	query.values.push(actor.id);
	const result = (await pg.db.query<Actor>(query.text, query.values)).rows[0];
	return result;
}
const removeActor = async (actor: Actor) => {
	const query = generateDeleteQuery(`public."movie"`, { id: actor.id });
	const result = (await pg.db.query<Actor>(query.text, query.values)).rows[0];
	return result;
}
const createActor = async (actor: Actor) => {
	const query = generateInsertQuery(`public."movie"`, getDefaultActor(), actor, true, true);
	const result = (await pg.db.query<Actor>(query.text, query.values)).rows[0];
	return result;
}