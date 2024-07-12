import { Router } from 'express';
import userController from '../../controllers/user.controller';
import middlewares from '../../middlewares/middlewares';
import authMiddlewares from '../../middlewares/auth.middleware';

const userRouter: Router = Router();

userRouter.post(
  '/register',
  middlewares.tryCatch(userController.createUser.bind(userController))
);

userRouter.get(
  '/activate/:activationToken',
  middlewares.tryCatch(userController.activateUser.bind(userController))
);

userRouter.post('/auth', middlewares.tryCatch(middlewares.authenticate()));

userRouter.get('/login/:email', middlewares.tryCatch(userController.loginUser.bind(userController)));

userRouter.post(
  '/verify',
  middlewares.tryCatch(middlewares.validator('validateEmail')),
  middlewares.tryCatch(userController.verifyUser.bind(userController)), 
);

userRouter.post(
  '/reset/:verificationToken',
  middlewares.tryCatch(middlewares.validator('validatePassword')),
  middlewares.tryCatch(userController.resetPassword.bind(userController)), 
);

userRouter.post(
  '/update',
  authMiddlewares.authMiddleware,
  middlewares.tryCatch(middlewares.isExist('user')),
  middlewares.tryCatch(middlewares.validator('validateName')),
  middlewares.tryCatch(middlewares.validator('validateEmail')),
  middlewares.tryCatch(middlewares.validator('validatePassword')),
  middlewares.tryCatch(userController.updateData.bind(userController)),
);

export default userRouter;
