import * as React from 'react';
import classNames from 'classnames';

import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { useTodosSelector } from '~/hooks/useTodosSelector';

import { titleStyles, phoneTitleStyles, formStyles, tabletFormStyles, phoneFormStyles, messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './addTodo.styles';
import { todoService } from '~shared/services/todo.service';
import FormField from '~shared/components/field/field.component';
import { validateTitle, validateText } from '~shared/services/validation.service';

type Props = {
  onPhone: boolean,
  onTablet: boolean,
};

interface Form {
  title: string;
  text: string;
  isCompleted: boolean;
  isPrivate: boolean;
};

const AddTodo: React.FunctionComponent<Props> = ({ onPhone, onTablet }) => {
  const { user } = useUsersSelector();
  const { addTodo, setIsTodoLoading } = useTodosSelector();
  const [messages, setMessages] = React.useState([]);
  const defaultValues = React.useMemo(() => ({
    title: '',
    text: '',
    isCompleted: false,
    isPrivate: false,
  }), []); 
  const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<Form>({ defaultValues });

  const handleAdd: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsTodoLoading(true);

    try {
      const { newTodo, message } = await todoService.createTodo.call(
        todoService,
        { title: data.title, text: data.text, userId: user.id, userName: user.name, isCompleted: data.isCompleted, isPrivate: data.isPrivate },
      );

      setMessages([message]);

      if (newTodo) {
        addTodo(newTodo);
      }   
    } catch (error) {
      setMessages([error.message])
    } finally {
      setIsTodoLoading(false);
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
      <h1
        className={classNames(
          titleStyles,
          { [phoneTitleStyles]: onPhone }
        )}
      >
        Add todo
      </h1>

      <form
        className={classNames(
          formStyles,
          { [phoneFormStyles]: onPhone },
          { [tabletFormStyles]: onTablet && ! onPhone },
        )}
        onSubmit={handleSubmit(handleAdd, handleError)}
      >
        <FormField
          name="title"
          type="text"
          errors={errors}
          validate={validateTitle}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
        />

        <FormField
          name="text"
          type="text"
          errors={errors}
          validate={validateText}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          onPhone={onPhone}
          onTablet={onTablet}
        />
    
        <FormField
          name="isCompleted"
          type="checkbox"
          errors={errors}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          required={false}
          onPhone={onPhone}
          onTablet={onTablet}
          row={true}
        />

        <FormField
          name="isPrivate"
          type="checkbox"
          errors={errors}
          register={register}
          clearErrors={clearErrors}
          setMessages={setMessages}
          messages={messages}
          required={false}
          onPhone={onPhone}
          onTablet={onTablet}
          row={true}
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
                  { [errorMessageStyles]: message !== 'Successfully updated' },
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

export default AddTodo;
