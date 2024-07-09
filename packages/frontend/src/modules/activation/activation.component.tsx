import classNames from 'classnames';
import * as React from 'react';

import { userService } from '~shared/services/user.service';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { useLocation } from 'react-router-dom';
import { messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './activation.styles';
import { STORAGE_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

const Activation: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { setUser, isUserLoading, setIsUserLoading } = useUsersSelector();
  const [message, setMessage] = React.useState('');
  const { pathname } = useLocation();
  const token = pathname.split('/')[2];
  const handleActivation = async () => {
    setIsUserLoading(true);

    try {
      const { message, user, accessToken } = await userService.activateUser.call(userService, token);
      
      localStorage.setItem(STORAGE_KEYS.ACCESSTOKEN, accessToken);

      setUser(user);
      setMessage(message);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsUserLoading(false);
    }
  };

  React.useEffect(() => {
    handleActivation();
  }, []);

  return (
    (!isUserLoading && message) && (
      <div className={classNames(
        messageStyles,
        { [phoneMessageStyles]: onPhone },
        { [tabletMessageStyles]: onTablet && ! onPhone },
        { [errorMessageStyles]: message !== 'Activated' },
      )}>
        {message}
      </div>
    )
  );
};

export default Activation;
