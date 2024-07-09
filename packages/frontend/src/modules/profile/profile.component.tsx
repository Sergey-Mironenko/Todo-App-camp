import * as React from 'react';
import classNames from 'classnames';

import { useUsersStore } from '~store/user.store';
import { NavLink } from 'react-router-dom';
import { profileStyles, phoneProfileStyles, tabletProfileStyles,
  titleStyles, phoneTitleStyles, tabletTitleStyles } from './profile.styles';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

const Profile: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const user = useUsersStore(state => state.user);

  return (
    <>
      <h1 className={classNames(
        titleStyles,
        { [phoneTitleStyles]: onPhone },
        { [tabletTitleStyles]: onTablet && !onPhone}
      )}>
        {`${user.name}'s profile`}
      </h1>

      <div className={classNames(
        profileStyles,
        { [phoneProfileStyles]: onPhone },
        { [tabletProfileStyles]: onTablet && !onPhone},
      )}>
        <NavLink to={ROUTER_KEYS.DASHBOARD}>Dashboard</NavLink>
        <NavLink to={ROUTER_KEYS.CHANGENAME}>Change name</NavLink>
        <NavLink to={ROUTER_KEYS.CHANGEPASSWORD}>Change password</NavLink>
      </div>
    </>
  );
};

export default Profile;
