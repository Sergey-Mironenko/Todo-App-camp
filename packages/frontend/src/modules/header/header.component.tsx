import * as React from 'react';

import { HeaderStyles, containerStyles, buttonContainerStyles, logoStyles, buttonStyles } from './header.styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { useUsersStore } from '~store/user.store';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
}

const Header: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const user = useUsersStore(state => state.user);
  const setUser = useUsersStore(state => state.setUser);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
  }

  return (
	<header className={classNames(
      HeaderStyles(onPhone)
	)}>
      <div className={classNames(
        containerStyles(onPhone)
      )}>
        <div className={classNames(
          logoStyles(onPhone)
        )}>
          Todo App
        </div>
        <div className={classNames(
          buttonContainerStyles(onPhone)
        )}>
          {!user ? (
            <>
              <NavLink
                to={ROUTER_KEYS.LOGIN}
                className={({ isActive }) => classNames(
                  buttonStyles(onPhone, isActive)
                )}
              >
                Log in
              </NavLink>
              <NavLink
                to={ROUTER_KEYS.REGISTRATION}
                className={({ isActive }) => classNames(
                  buttonStyles(onPhone, isActive)
                )}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <button
                className={classNames(
                  buttonStyles(onPhone)
                )}
                onClick={handleLogout}
              >
                Log out
              </button>
              <NavLink
                to={ROUTER_KEYS.PROFILE}
                className={({ isActive }) => classNames(
                  buttonStyles(onPhone, isActive)
                )}
              >
                Profile
              </NavLink>
            </>
          )}
        </div>
      </div>
	</header>
  );
};

export default Header;
