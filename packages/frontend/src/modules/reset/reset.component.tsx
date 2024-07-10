import classNames from 'classnames';
import * as React from 'react';
import { formStyles, phoneFormStyles, tabletFormStyles,
  messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './reset.styles';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { userService } from '~shared/services/user.service';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { validatePassword } from '~shared/services/validation.service';

import FormField from '~shared/components/field/field.component';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

interface Form {
  password: string;
  repeatedPassword: string;
}

const Reset: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { setIsUserLoading } = useUsersSelector();
  const { pathname } = useLocation();
  const verificationToken = pathname.split('/')[2];
  const [messages, setMessages] = React.useState([]);
  const defaultValues = React.useMemo(() => ({
    repeatedPassword: '',
    password: '',
  }), []);
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues,
  });

  const handleReset: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsUserLoading(true);

    try {
      if (data.password === data.repeatedPassword) {
        const { message } = await userService.resetUser.call(userService, { password: data.password }, verificationToken);

        setMessages([message]);
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
        <h2>Reset password</h2>

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
        />

        <div>
          <button type="submit">Reset</button>
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

export default Reset;
