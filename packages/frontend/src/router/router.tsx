import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUsersStore } from '~store/user.store';
import { ROUTER_KEYS } from '~shared/keys';

import { PrivateRoutes, PublicRoutes } from './routes';
import Login from '../modules/login/login.component';
import Registration from '../modules/registration/registration.component';
import Activation from '../modules/activation/activation.component';
import Main from '../modules/main/main.component';
import Reset from '../modules/reset/reset.component';
import Verification from '../modules/verification/verification.component';
import Profile from '../modules/profile/profile.component';
import ChangeName from '../modules/changeName/changeName.component';
import ChangePassword from '../modules/changePassword/changePassword.component';
import TodoList from '../modules/todoList/todoList.component';
import TodoInfo from '../modules/todoInfo/todoInfo.component';
import AddTodo from '../modules/addTodo/addTodo.component';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

const Router: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const user = useUsersStore(state => state.user);

  return (
	<Routes>
	  <Route element={<PublicRoutes user={user} />}>
	    <Route
		  path={ROUTER_KEYS.MAIN}
		  element={<Main onTablet={onTablet} onPhone={onPhone} />}
		/>

	    <Route
		  path={ROUTER_KEYS.REGISTRATION}
		  element={<Registration onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.ACTIVATION}
		  element={<Activation onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.LOGIN}
		  element={<Login onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.VERIFY}
		  element={<Verification onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.RESET}
		  element={<Reset onTablet={onTablet} onPhone={onPhone} />}
		/>
      </Route>

	  <Route element={<PrivateRoutes user={user} />}>
		<Route
		  path={ROUTER_KEYS.PROFILE}
		  element={<Profile onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.CHANGENAME}
		  element={<ChangeName onTablet={onTablet} onPhone={onPhone} />}
		/>

		<Route
		  path={ROUTER_KEYS.CHANGEPASSWORD}
		  element={<ChangePassword onTablet={onTablet} onPhone={onPhone} />}
		/>

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
