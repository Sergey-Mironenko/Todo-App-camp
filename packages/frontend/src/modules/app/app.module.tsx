import * as React from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import Header from '../header/header.component';
import { AppStyles } from './app.module.styles';
import Router from '~router/router';

import { useUsersStore } from '~store/user.store';
import { useTodosStore } from '~store/todo.store';

import Loader from '~shared/components/loader/loader.component';

const App: React.FunctionComponent = () => {
  const onTablet = useMediaQuery({ maxWidth: 1000 });
  const onPhone = useMediaQuery({ maxWidth: 500 });
  const isUserLoading = useUsersStore(state => state.isLoading);
  const areTodosLoading = useTodosStore(state => state.isLoading);

  return (
	<main className={classNames(
	  AppStyles()
	)}>
	  {(isUserLoading || areTodosLoading) && (
		<Loader />
	  )}

	  <Header onTablet={onTablet} onPhone={onPhone}/>
	  
	  <Router onTablet={onTablet} onPhone={onPhone}/>
	</main>
  );
};

export default App;
