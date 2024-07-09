import passport from 'passport';
import Strategy from 'passport-local';
import prisma from '@/utils/db';

const LocalStrategy = Strategy.Strategy

interface User {
  id?: string,
  name?: string,
  email?: string,
  password?: string,
  verificationToken?: string | null,
  isVerified?: boolean,
  activationToken?: string | null,
  isActivated?: boolean,
}

passport.serializeUser(function(user: User, done) {
  done(null, user.id);
})

passport.deserializeUser(async function(id: string, done) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      }
    });

    done(null, user);
  } catch (error) {
    done(error);
  }
})

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async function (email, password, done) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      }
    });

    if (!user) {
      return done(null, false);
    }

    if (user?.password !== password) {
      return done(null, false);
    }

    return done(null, user);
  })
);
