import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import Filestore from 'session-file-store';
import 'dotenv/config';

import cors from 'cors';
import cookieParser from 'cookie-parser';

import AppRouter from './routes';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);
const SessionStore = Filestore(session);

app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: 'secret',
  store: new SessionStore(),
  cookie: {
	path: '/',
	httpOnly: true,
	maxAge: 60 * 60 * 1000 * 24 * 7,
  },
  resave: false,
  saveUninitialized: false,
}))

require('./services/passport.service');
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
	origin: '*',
	credentials: true,
}));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello Node!');
});

router.init();

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
