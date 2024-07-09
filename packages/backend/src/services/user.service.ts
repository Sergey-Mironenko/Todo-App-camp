import prisma from '../utils/db';
import { UserType } from '../types/user.type';
  
export default class UserService {
  async getByEmail(email: string): Promise<UserType | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return user;
    }

    return null;
  };

  async getByActvationToken(activationToken: string): Promise<UserType | null> {
    const user = await prisma.user.findUnique({
      where: {
      activationToken,
          isActivated: true,
      },
    });

    if (user) {
      return user;
    }

    return null;
  };

  async getByVerificationToken(verificationToken: string): Promise<UserType | null> {
    const user = await prisma.user.findUnique({
      where: {
      verificationToken,
          isVerified: true,
      },
    });

    if (user) {
      return user;
    }

    return null;
  };

  async createUser(name: string, email: string, password: string): Promise<UserType | null> {
    const newUser = await prisma.user.create({
      data: {
      name,
        email,
        password,
      },
    });

    return newUser;
  };

  async activateUser(activationToken: string): Promise<UserType | null> {
    const userToActivate = await prisma.user.findFirst({
      where: {
        AND: [
          {
            activationToken: {
              equals: activationToken
            },
          },
          {
            isActivated: {
              equals: false,
            },
          }
        ],
      },
    });
  
    if (!userToActivate) {
      return null;
    }

    const user = await prisma.user.update({
      where: {
        id: userToActivate?.id,
      },
      data: {
        isActivated: true,
      }
    });

    return user;
  };

  async verifyUser(email: string): Promise<UserType | null> {
    const user = await this.getByEmail(email);

    const updatedUser = await prisma.user.update({
      where: {
        email: user?.email,
      },
      data: {
        isVerified: true,
      }
    });

      if (updatedUser) {
        return updatedUser;
      }

    return null;
  };

  async resetPassword(verificationToken: string, password: string): Promise<UserType | null> {
    const userToReset = await prisma.user.findFirst({
      where: {
        AND: [
          {
            verificationToken: {
              equals: verificationToken,
            },
          },
          {
            isVerified: {
              equals: true,
            },
          }
        ],
      },
    });

    if (!userToReset) {
      return null;
    }

    const user = await prisma.user.update({
      where: {
        id: userToReset?.id,
      },
      data: {
        password,
        isVerified: false,
      }
    });

    return user;
  };

  async updateUser(name: string, email: string, password: string): Promise<UserType | null> {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
        password,
      }
    });

    return user;
  };
};
