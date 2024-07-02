import FindInDbService from '../services/findInDb.service';
import { Response, Request, NextFunction, RequestHandler } from 'express';
import { JoiService } from '@/services/joi.service';
import { prismaModels } from '../types/models.type';

export class Middlewares {
  constructor(public findInDbService: FindInDbService, public joiService: JoiService) {}

  tryCatch(action: RequestHandler) {
	return async function(req: Request, res: Response, next: NextFunction) {
	  try {
		await action(req, res, next);
	  } catch (e) {
		next(e);
	  }
	}
  }

  validator(option: keyof JoiService) {
	const validationSchema = this.joiService[option];

	return function(req: Request, res: Response, next: NextFunction) {
	  const { error } = validationSchema(req.body);

	  if (error) {
		res.status(400).json({ message: 'Error' });

		return;
	  }

      next();
	}
  }

  isExist(model: keyof prismaModels) {
	const findExisting = this.findInDbService.getById;

	return async function(req: Request, res: Response, next: NextFunction) {
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

const middlewares = new Middlewares(new FindInDbService(), new JoiService());
export default middlewares;
