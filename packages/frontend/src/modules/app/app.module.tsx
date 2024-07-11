import * as React from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';

import Header from '../header/header.component';
import { AppStyles } from './app.module.styles';
import Router from '~router/router';

import { useTodosSelector } from '~/hooks/useTodosSelector';
import { useUsersSelector } from '~/hooks/useUsersSelector';

import Loader from '~shared/components/loader/loader.component';

const App: React.FunctionComponent = () => {
  const onTablet = useMediaQuery({ maxWidth: 1000 });
  const onPhone = useMediaQuery({ maxWidth: 500 });
  const { isTodoLoading, setIsTodoLoading } = useTodosSelector();
  const { isUserLoading, setIsUserLoading } = useUsersSelector();

  React.useEffect(() => {
	setIsTodoLoading(false);
	setIsUserLoading(false);
  }, []);

  return (
	<main className={classNames(
	  AppStyles
	)}>
	  {(isTodoLoading || isUserLoading) && (
		<Loader />
	  )}

	  <Header onTablet={onTablet} onPhone={onPhone}/>
	  
	  <Router onTablet={onTablet} onPhone={onPhone}/>
	</main>
  );
};

export default App;
