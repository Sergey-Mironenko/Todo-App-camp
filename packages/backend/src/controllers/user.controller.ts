import EmailService from '../services/email.service';
import JWTService from '../services/jwt.service';
import UserService from '../services/user.service';
import { UserType } from '../types/user.type';
import { Response, Request } from 'express';

export class UserController {
  constructor(
    public userService: UserService,
    public emailService: EmailService,
    public jwtService: JWTService,
  ) {}

  async createUser(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    const checkedUser = await this.userService.getByEmail(email);

    if (checkedUser) {
      res.json({ message: 'User with such email already exists' }).status(409);

      return;
    }

    const user = await this.userService.createUser(name, email, password);

    if (user) {
      await this.emailService.sendEmail(email, 'activate', user.activationToken as string, 'Activation');
    }

    res.json({ message: 'Email has been sent' }).status(200);
  }

  async activateUser(req: Request, res: Response): Promise<void> {
    const { activationToken } = req.params;

    const user = await this.userService.getByActvationToken(activationToken);

    if (user) {
      res.json({ message: 'No one to activate' }).status(404);

      return;
    }

    const activatedUser = await this.userService.activateUser(activationToken);

    const { accessToken } = this.jwtService.sign(activatedUser as UserType);

    if (activatedUser) {
      req.logIn(activatedUser, function(err) {
        if (err) {
          res.status(401).json({ message: 'Error while logging in' })
    
          return;
        }
      })
    }

    res.send({
      message: 'Activated',
      user: activatedUser,
      accessToken,
    });
  }

  async loginUser(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const user = await this.userService.getByEmail(email);

    if (!user) {
      res.json({ message: 'Wrong email'}).status(401);

      return;
    }

    if (user.password !== password) {
      res.json({ message: 'Wrong password' }).status(401);

      return;
    }

    if (!user.isActivated) {
      res.json({ message: 'Activate your account firs' }).status(401);

      return;
    }

    const { accessToken } = await this.jwtService.sign(user as UserType);

    res.status(200);
    res.send({
      message: 'Loged in',
      user: user,
      accessToken,
    });
  }

  async verifyUser(req: Request, res: Response): Promise<void> {
    const { email } = req.body;

    const checkedUser = await this.userService.getByEmail(email);

    if (!checkedUser) {
      res.json({ message: 'No user with such email'}).status(404);

      return;
    }

    const user = await this.userService.verifyUser(email);

    if (user) {
      await this.emailService.sendEmail(email, 'reset', user.verificationToken as string, 'Reset password');

      res.json({ message: 'Email has been sent'}).status(200);

      return;
    }
  }

  async resetPassword(req: Request, res: Response): Promise<void> {
    const { verificationToken } = req.params;
    const { password } = req.body;

    const user = await this.userService.getByVerificationToken(verificationToken);

    if (!user) {
      res.json({ message: 'No one to reset'}).status(404);

      return;
    }

    console.log(password)

    const resetedUser = await this.userService.resetPassword(verificationToken, password);
       
    console.log(resetedUser)
    
    res.send({
      message: 'Successfully reseted',
      resetedUser,
    });
  }

  async updateData(req: Request, res: Response): Promise<void> {
    const {name, email, password } = req.body;

    const user = await this.userService.updateUser(name, email, password);
       
    if (user) {
      res.send({
        message: 'Successfully reseted',
        user,
      });

      return;
    }
  }
}

const userController = new UserController(new UserService(), new EmailService(), new JWTService());
export default userController;
