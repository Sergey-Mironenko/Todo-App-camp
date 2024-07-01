import FindInDbService from '../services/findInDb.service';
import { TodoType } from '../types/todos.type';
import { Response, Request, NextFunction } from 'express';
import { prismaModels } from '../types/models.type';
import { UserType } from '../types/user.type';

interface Options {
  id?: 'string',
  userId?: 'string',
  userName?: 'string',
  text?: 'string',
  title?: 'string',
  isPrivate?: 'boolean',
  isCompleted?: 'boolean',

  name?: 'string',
  email?: 'string',
  password?: 'string',
  isActivated?: 'boolean',
  isVerified?: 'boolean',
  activationToken?: 'string',
  verificationToken?: 'string',
}

export class Middlewares {
  constructor(public findInDbService: FindInDbService) {}

  tryCatch(action: any) {
	return async function(req: Request, res: Response, next: NextFunction) {
	  try {
		await action(req, res, next);
	  } catch (e) {
		next(e);
	  }
	}
  }

  validator(options: Options) {
	return function(req: Request, res: Response, next: NextFunction) {
	  for (const key in options) {
		if (!req.body[key] || (typeof req.body[key] !== options[key as keyof Options])) {
		  res.status(400).json({ message: 'Error' });
		}
	  }

      next();
	}
  }

  isExist(model: keyof prismaModels) {
	const findExisting = this.findInDbService.getById;

	console.log(1)
	return async function(req: Request, res: Response, next: NextFunction) {
		console.log(2)
	  const { id } = req.body;
	  const entity = await findExisting(id, model);

	  if (!entity) {
		res.json({ message: 'Not found' }).status(404);
	
		return;
	  }
		
	  res.locals = {
		entity,
	  }
		
	  next();
	}
  }

};

const middlewares = new Middlewares(new FindInDbService());
export default middlewares;
