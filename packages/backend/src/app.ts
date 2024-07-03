import express, { Express, Request, Response } from 'express';
import 'dotenv/config';

import cors from 'cors';
import cookieParser from 'cookie-parser';

import AppRouter from './routes';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(express.json());
app.use(cookieParser());

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
