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

    res.send({
      message: 'Activated',
      user: activatedUser,
      accessToken,
    });
  }

  async loginUser(req: Request, res: Response): Promise<void> {
    const { email } = req.params;

    const user = await this.userService.getByEmail(email);

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

    const resetedUser = await this.userService.resetPassword(verificationToken, password);
    
    res.send({
      message: 'Successfully reseted',
      resetedUser,
    });
  }

  async updateData(req: Request, res: Response): Promise<void> {
    const {name, email, password } = req.body;

    const updatedUser = await this.userService.updateUser(name, email, password);
       
    if (updatedUser) {
      res.send({
        message: 'Successfully reseted',
        updatedUser,
      });

      return;
    }
  }
}

const userController = new UserController(new UserService(), new EmailService(), new JWTService());
export default userController;
