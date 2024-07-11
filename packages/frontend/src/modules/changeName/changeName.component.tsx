import classNames from 'classnames';
import * as React from 'react';
import { formStyles, phoneFormStyles, tabletFormStyles,
  messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './changeName.styles';
import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';

import { userService } from '~shared/services/user.service';
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
  name: string;
}

const ChangeName: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const { user, setUser, setIsUserLoading } = useUsersSelector();
  const [messages, setMessages] = React.useState([]);
  const defaultValues = React.useMemo(() => ({
    name: '',
  }), []);
  const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues,
  });

  const handleReset: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsUserLoading(true);

    try {
      const { message, updatedUser } = await userService.changeData.call(
        userService,
        { id: user.id, name: data.name, email: user.email, password: user.password },
      );

      if (updatedUser) {
        setMessages([message]);
        setUser(updatedUser);
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
        <h2>Change name</h2>

        <FormField
          name="name"
          type="text"
          errors={errors}
          validate={validatePassword}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
          row={false}
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

export default ChangeName;
