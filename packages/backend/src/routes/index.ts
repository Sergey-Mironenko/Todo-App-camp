import { Application } from 'express';
import todosRouter from './api/todos.route';

class AppRouter {
	constructor(private app: Application) {}

	init(): void {
		this.app.get('/', (_req, res) => {
			res.send('API Running');
		});
		this.app.use('/api/todos', todosRouter);
	}
}

export default AppRouter;
