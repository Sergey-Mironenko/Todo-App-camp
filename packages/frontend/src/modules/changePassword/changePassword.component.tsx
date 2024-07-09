import classNames from 'classnames';
import * as React from 'react';
import { formStyles, phoneFormStyles, tabletFormStyles,
  messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './changePassword.styles';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

import UserService from '~shared/services/user.service';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { validatePassword } from '~shared/services/validation.service';

import FormField from '~shared/components/field/field.component';
import { ROUTER_KEYS } from '~shared/keys';
import { NavLink } from 'react-router-dom';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

interface Form {
  password: string;
  repeatedPassword: string;
}

const ChangePassword: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { user, setUser, setIsUserLoading } = useUsersSelector();
  const userService = new UserService(setUser);
  const [messages, setMessages] = React.useState([]);
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues: {
      password: '',
      repeatedPassword: '',
    },
  });

  const handleReset: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsUserLoading(true);

    try {
      if (data.password === data.repeatedPassword) {
        const { message, updatedUser } = await userService.changeData.call(
          userService,
          { id: user.id, name: user.name, email: user.email, password: data.password },
        );

        if (updatedUser) {
          setMessages([message]);
          setUser(updatedUser);
        }
      } else {
        setError('password', { type: 'custom'});
        setError('repeatedPassword', { type: 'custom'});
        setMessages(['Passwords do not match'])
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
        onSubmit={handleSubmit(handleReset, handleError)}
      >
        <h2>Change password</h2>

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
          label="New password:"
        />
    
        <FormField
          name="repeatedPassword"
          type="password"
          errors={errors}
          validate={validatePassword}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
          label="Repeat new password:"
        />

        <div>
          <button type="submit">Rename</button>
          
          <NavLink to={ROUTER_KEYS.PROFILE}>Back</NavLink>
        </div>
      </form>

      {messages.length > 0 && (
        messages.map(message => {
          if (message && message.length > 0) {
            return (
              (
                <div className={classNames(
                  messageStyles,
                  { [phoneMessageStyles]: onPhone },
                  { [tabletMessageStyles]: onTablet && ! onPhone },
                  { [errorMessageStyles]: message !== 'Successfully reseted' },
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

export default ChangePassword;
