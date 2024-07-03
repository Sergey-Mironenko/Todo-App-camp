import prisma from '../utils/db';
import { TodoType } from '../types/todos.type';
import { prismaModels } from '../types/models.type'
  
export default class FindInDbService {
  async getById(id: string, model: keyof prismaModels): Promise<TodoType | null> {
	const entity = await (prisma[model] as any).findUnique({
	  where: {
		id
	  }
    });
	
	if (entity) {
	  return entity;
	}
	
	return null;
  }
}
