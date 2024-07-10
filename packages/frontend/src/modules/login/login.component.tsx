import classNames from 'classnames';
import * as React from 'react';
import { formStyles, phoneFormStyles, tabletFormStyles,
  messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './login.styles';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

import { userService } from '~shared/services/user.service';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { validateEmail, validatePassword } from '~shared/services/validation.service';

import FormField from '~shared/components/field/field.component';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS, STORAGE_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

interface Form {
  email: string;
  password: string;
}

const Registration: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { setUser, setIsUserLoading } = useUsersSelector();
  const [messages, setMessages] = React.useState([]);
  const defaultValues = React.useMemo(() => ({
    email: '',
    password: '',
  }), []);
  const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues,
  });

  const handleLogin: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsUserLoading(true);

    try {
      const { message, user, accessToken } = await userService.loginUser.call(userService, { email: data.email, password: data.password});

      setMessages([message]);

      if (user) {
        localStorage.setItem(STORAGE_KEYS.ACCESSTOKEN, accessToken);
        setUser(user);
      }
    } catch (error) {
      setMessages([error.message]);
    } finally {
      setIsUserLoading(false);
    }
  };

  const handleError: SubmitErrorHandler<Form> = () => {
    const errrorMessages = [];

    for (const error in errors) {
      errrorMessages.push(error);
    }

    setMessages(errrorMessages);
  };

  return (
    <>
      <form
        className={classNames(
          formStyles,
          { [phoneFormStyles]: onPhone },
          { [tabletFormStyles]: onTablet && !onPhone },
        )}
        onSubmit={handleSubmit(handleLogin, handleError)}
      >
        <h2>Login</h2>

        <FormField
          name="email"
          type="email"
          errors={errors}
          validate={validateEmail}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
        />
    
        <FormField
          name="password"
          type="password"
          errors={errors}
          validate={validatePassword}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
        />

        <div>
          <button type="submit">Submit</button>
          <NavLink to={ROUTER_KEYS.VERIFY}>Reset</NavLink>
        </div>
      </form>

      {messages.length > 0 && (
        messages.map(message => {
          if (message && message.length > 0) {
            return (
              (
                <div className={classNames(
                  messageStyles,
                  errorMessageStyles,
                  { [phoneMessageStyles]: onPhone },
                  { [tabletMessageStyles]: onTablet && ! onPhone },
                )}>
                  {message}
                </div>
              )
            )
          }
        })
      )}
    </>
  );
};

export default Registration;
