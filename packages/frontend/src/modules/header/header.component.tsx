import * as React from 'react';

import { headerStyles, phoneHeaderStyles, containerStyles, phoneContainerStyles,
  buttonContainerStyles, phoneButtonContainerStyles, logoStyles, phoneLogoStyles,
  buttonStyles, phoneButtonStyles, activeButtonStyles } from './header.styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { useUsersSelector } from '~/hooks/useUsersSelector';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
}

const Header: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { user, setUser } = useUsersSelector();

  const handleLogout = () => {
    setUser(null);
  }

  return (
	<header className={classNames(
      headerStyles,
      { [phoneHeaderStyles]: onPhone },
	)}>
      <div className={classNames(
        containerStyles,
        { [phoneContainerStyles]: onPhone },
      )}>
        <div className={classNames(
          logoStyles,
          { [phoneLogoStyles]: onPhone },
        )}>
          Todo App
        </div>
        <div className={classNames(
          buttonContainerStyles,
          { [phoneButtonContainerStyles]: onPhone },
        )}>
          {!user ? (
            <>
              <NavLink
                to={ROUTER_KEYS.LOGIN}
                className={({ isActive }) => classNames(
                  buttonStyles,
                  { [phoneButtonStyles]: onPhone },
                  { [activeButtonStyles]: isActive },
                )}
              >
                Log in
              </NavLink>
              <NavLink
                to={ROUTER_KEYS.REGISTRATION}
                className={({ isActive }) => classNames(
                  buttonStyles,
                  { [phoneButtonStyles]: onPhone },
                  { [activeButtonStyles]: isActive },
                )}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <button
                className={classNames(
                  buttonStyles,
                  { [phoneButtonStyles]: onPhone },
                )}
                onClick={handleLogout}
              >
                Log out
              </button>
              <NavLink
                to={ROUTER_KEYS.PROFILE}
                className={({ isActive }) => classNames(
                  buttonStyles,
                  { [phoneButtonStyles]: onPhone },
                  { [activeButtonStyles]: isActive },
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
