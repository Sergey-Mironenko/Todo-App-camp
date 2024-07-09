import * as React from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';
import { titleStyles, phoneTitleStyles, tabletTitleStyles,
  buttonStyles, phoneButtonStyles, tabletButtonStyles } from './main.styles';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

const Main: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  return (
    <>
      <h2
        className={classNames(
          titleStyles,
          { [phoneTitleStyles]: onPhone },
          { [tabletTitleStyles]: onTablet && !onPhone },
        )}
      >
        Welcome to Todo App
        </h2>
      <NavLink
        to={ROUTER_KEYS.REGISTRATION}
        className={classNames(
          buttonStyles,
          { [phoneButtonStyles]: onPhone },
          { [tabletButtonStyles]: onTablet && !onPhone },
        )}
      >
        Get started
        </NavLink>
    </>
  );
};

export default Main;
