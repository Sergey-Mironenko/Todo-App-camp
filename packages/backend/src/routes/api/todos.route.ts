import authMiddlewares from '@/middlewares/auth.middleware';
import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import middlewares from '../../middlewares/middlewares';

const todosRouter: Router = Router();

todosRouter.get(
  '/all',
  authMiddlewares.authMiddleware,
  middlewares.tryCatch(todoController.getAllTodo.bind(todoController)),
);

todosRouter.post(
  '/find',
  authMiddlewares.authMiddleware,
  middlewares.tryCatch(middlewares.validator('validateId')),
  middlewares.tryCatch(middlewares.isExist('todo')),
  middlewares.tryCatch(todoController.getById.bind(todoController)),
);

todosRouter.put(
  '/create',
  authMiddlewares.authMiddleware,
  middlewares.tryCatch(middlewares.validator('validateCreating')),
  middlewares.tryCatch(todoController.createTodo.bind(todoController)),
);

todosRouter.patch(
  '/update',
  authMiddlewares.authMiddleware,
  middlewares.tryCatch(middlewares.validator('validateUpdating')),
  middlewares.tryCatch(middlewares.isExist('todo')),
  middlewares.tryCatch(todoController.updateTodo.bind(todoController)),
);

todosRouter.delete(
  '/delete',
  authMiddlewares.authMiddleware,
  middlewares.tryCatch(middlewares.validator('validateId')),
  middlewares.tryCatch(middlewares.isExist('todo')),
  middlewares.tryCatch(todoController.deleteTodo.bind(todoController)),
);

export default todosRouter;
