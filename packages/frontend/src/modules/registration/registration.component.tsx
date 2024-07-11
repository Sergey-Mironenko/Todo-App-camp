import classNames from 'classnames';
import * as React from 'react';
import { formStyles, phoneFormStyles, tabletFormStyles,
  messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './registration.styles';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

import { userService } from '~shared/services/user.service';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { validateEmail, validateName, validatePassword } from '~shared/services/validation.service';

import FormField from '~shared/components/field/field.component';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
};

interface Form {
  name: string;
  email: string;
  password: string;
}

const Registration: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { setIsUserLoading } = useUsersSelector();
  const [messages, setMessages] = React.useState([]);
  const defaultValues = React.useMemo(() => ({
    name: '',
    email: '',
    password: '',
  }), []);
  const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues,
  });

  const handleRegister: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsUserLoading(true);

    try {
      const { message } = await userService.registerUser.call(
        userService,
        { name: data.name, email: data.email, password: data.password},
      );

      setMessages([message]);
    } catch (error) {
      setMessages([error.message])
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
        onSubmit={handleSubmit(handleRegister, handleError)}
      >
        <h2>Registration</h2>

        <FormField
          name="name"
          type="text"
          errors={errors}
          validate={validateName}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
        />

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

        <button type="submit">Submit</button>
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
                  { [errorMessageStyles]: message !== 'Email has been sent' },
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
