import { Router } from 'express';

import todoController from '../../controllers/todo.controller';
import middlewares from '../../middlewares/middlewares';

const todosRouter: Router = Router();

todosRouter.get(
  '/all',
  middlewares.tryCatch(todoController.getAllTodo.bind(todoController)),
);

todosRouter.post(
  '/find',
  middlewares.tryCatch(middlewares.validator({ id: 'string' })),
  middlewares.tryCatch(middlewares.isExist('todo')),
  middlewares.tryCatch(todoController.getById.bind(todoController)),
);

todosRouter.put(
  '/create',
  middlewares.tryCatch(middlewares.validator(
    { title: 'string', text: 'string', userId: 'string', userName: 'string', isCompleted: 'boolean', isPrivate: 'boolean' }
  )),
  middlewares.tryCatch(todoController.createTodo.bind(todoController)),
);

todosRouter.patch(
  '/update',
  middlewares.tryCatch(middlewares.validator({ id: 'string', title: 'string', isCompleted: 'boolean' })),
  middlewares.tryCatch(middlewares.isExist('todo')),
  middlewares.tryCatch(todoController.updateTodo.bind(todoController)),
);

todosRouter.delete(
  '/delete',
  middlewares.tryCatch(middlewares.validator({ id: 'string' })),
  middlewares.tryCatch(middlewares.isExist('todo')),
  middlewares.tryCatch(todoController.deleteTodo.bind(todoController)),
);

export default todosRouter;
