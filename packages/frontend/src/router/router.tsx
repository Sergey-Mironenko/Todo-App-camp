import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUsersStore } from '~store/user.store';
import { ROUTER_KEYS } from '~shared/keys';

import { PrivateRoutes } from './routes';
import TodoList from '~modules/todoList/todoList.component';
import TodoInfo from '~modules/todoInfo/todoInfo.component';
import AddTodo from '~modules/addTodo/addTodo.component';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

const Router: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const user = useUsersStore(state => state.user);

  return (
	<Routes>
	  <Route element={<PrivateRoutes user={user} />}>
		<Route
		  path={ROUTER_KEYS.DASHBOARD}
		  element={<TodoList onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.ADDTODO}
		  element={<AddTodo onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.TODOINFO}
		  element={<TodoInfo onTablet={onTablet} onPhone={onPhone} />}
		/>
      </Route>
	</Routes>
  );
};

export default Router;
