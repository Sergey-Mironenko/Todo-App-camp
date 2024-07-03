import * as React from 'react';
import classNames from 'classnames';

import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';
import { useUsersStore } from '~store/user.store';
import { useTodosStore } from '~store/todo.store';

import { titleStyles, formStyles, messageStyles } from './addTodo.styles';
import todoSerivce from '~shared/services/todo.service';
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
  const user = useUsersStore(state => state.user);
  const setUser = useUsersStore(state => state.setUser);
  const addTodo = useTodosStore(state => state.addTodo);
  const setIsTodoLoading = useTodosStore(state => state.setIsLoading);
  const [messages, setMessages] = React.useState([]);
  const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues: {
      title: '',
      text: '',
      isCompleted: false,
      isPrivate: false,
    },
  });

  const handleAdd: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsTodoLoading(true);

    try {
      const { newTodo, message } = await todoSerivce.createTodo.call(
        todoSerivce,
        { title: data.title, text: data.text, userId: user.id, userName: user.name, isCompleted: data.isCompleted, isPrivate: data.isPrivate },
      );

      setMessages([message]);

      if (message === 'Unauthorized') {
        setUser(null);
      } else if (newTodo) {
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
  
    if (errors.title) {
      errrorMessages.push(errors.title.message);
    }

    if (errors.text) {
      errrorMessages.push(errors.text.message);
    }

    if (errors.isCompleted) {
      errrorMessages.push(errors.isCompleted.message);
    }

    if (errors.isPrivate) {
      errrorMessages.push(errors.isPrivate.message);
    }

    setMessages(errrorMessages);
  };

  return (
	  <>
      <h1
        className={classNames(
            titleStyles()
        )}
      >
        Add todo
      </h1>

      <form
        className={classNames(
          formStyles(onPhone, onTablet && ! onPhone)
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
                  messageStyles(onPhone, onTablet && ! onPhone, message !== 'Successfully added')
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
