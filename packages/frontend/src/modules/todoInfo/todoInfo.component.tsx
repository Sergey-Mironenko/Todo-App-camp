import * as React from 'react';
import classNames from 'classnames';

import { SubmitHandler, SubmitErrorHandler, useForm } from 'react-hook-form';
import { useUsersStore } from '~store/user.store';
import { useTodosStore } from '~store/todo.store';

import { TodoType } from '~shared/services/types';
import { titleStyles, infoStyles, formStyles, containerStyles, buttonContainerStyles, messageStyles } from './todoInfo.styles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import todoSerivce from '~shared/services/todo.service';
import { validateText, validateTitle } from '~shared/services/validation.service';
import FormField from '~shared/components/field/field.component';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onPhone: boolean,
  onTablet: boolean,
}

interface Form {
  title: string;
  text: string;
  isCompleted: boolean;
  isPrivate: boolean;
};

const TodoInfo: React.FunctionComponent<Props> = ({ onPhone, onTablet }) => {
  const currentUser = useUsersStore(state => state.user);
  const setUser = useUsersStore(state => state.setUser);
  const updateTodo = useTodosStore(state => state.updateTodo);
  const setIsTodoLoading = useTodosStore(state => state.setIsLoading);
  const navigate = useNavigate();
  const [todo, setTodo] = React.useState<null | TodoType>(null);
  const [isTodoEditing, setIsTodoEditing] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const { pathname } = useLocation();
  const todoId = pathname.split('/')[2];
  const { register, handleSubmit, clearErrors, formState: { errors } } = useForm<Form>({
    defaultValues: {
      title: todo?.title || '',
      text: todo?.text || '',
      isCompleted: todo?.isCompleted || false,
      isPrivate: todo?.isPprivate || false,
    },
  });
  const getInfo = async() => {
    setMessages([]);
    setIsTodoLoading(true);

    try {
      const { todo, message } = await todoSerivce.getTodoById.call(todoSerivce, { id: todoId });

      if (message === 'Unauthorized') {
        setUser(null);
      }

      if (!todo) {
        setMessages([message])
      } else {
        setTodo(todo);
      }
    } catch (error) {
      setMessages([error.message])
    } finally {
      setIsTodoLoading(false);
    }
  };

  const handleDelete = async() => {
    setMessages([]);
    setIsTodoLoading(true);

    try {
      const { deletedTodo, message } = await todoSerivce.deleteTodo.call(todoSerivce, { id: todo?.id });

      setMessages([message]);

      if (message === 'Unauthorized') {
        setUser(null);
      } else if (deletedTodo) {
        navigate(ROUTER_KEYS.DASHBOARD)
      }   
    } catch (error) {
      setMessages([error.message])
    } finally {
      setIsTodoLoading(false);
    }
  };

  const handleUpdate: SubmitHandler<Form> = async(data) => {
    setMessages([]);
    setIsTodoLoading(true);

    try {
      const { updatedTodo, message } = await todoSerivce.updateTodo.call(
        todoSerivce,
        { id: todo?.id, title: data.title, text: data.text, isCompleted: data.isCompleted, isPrivate: data.isPrivate },
      );

      setMessages([message]);

      if (message === 'Unauthorized') {
        setUser(null);
      } else if (updatedTodo) {
        setTodo(updatedTodo);
        updateTodo(updatedTodo);
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

  React.useEffect(() => {
    getInfo();
  }, []);

  return (
	  <>
      {todo && (
        <>
          <h1
            className={classNames(
              titleStyles(onPhone, onTablet && ! onPhone)
            )}
          >
            {`${todo.userName}'s todo`}
          </h1>

          {!isTodoEditing ? (
            <div className={classNames(
              infoStyles(onPhone, onTablet && ! onPhone)
            )}>
              <div className={classNames(
                containerStyles(false, onPhone, onTablet && ! onPhone)
              )}>
                <span>Title:</span>
                <div>{todo.title}</div>
              </div>

              <div className={classNames(
                containerStyles(false, onPhone, onTablet && ! onPhone)
              )}>
                <span>Text:</span>
                <div>{todo.text}</div>
              </div>

              <div className={classNames(
                containerStyles(true, onPhone, onTablet && ! onPhone)
              )}>
                <span>Completed:</span>
                <input type="checkbox" checked={todo.isCompleted} disabled/>
              </div>

              <div className={classNames(
                containerStyles(true, onPhone, onTablet && ! onPhone)
              )}>
                <span>Private:</span>
                <input type="checkbox" checked={todo.isPprivate} disabled/>
              </div>

              <div className={classNames(
                buttonContainerStyles(onPhone, onTablet && ! onPhone)
              )}>
                {currentUser.id === todo.userId && (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsTodoEditing(false)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </>
                )} 

                <NavLink to={ROUTER_KEYS.DASHBOARD}>Back</NavLink>
              </div>
            </div>
          ) : (
            <form
              className={classNames(
                formStyles(onPhone, onTablet && ! onPhone)
              )}
              onSubmit={handleSubmit(handleUpdate, handleError)}
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
                label="Completed:"
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
                label="Private:"
              />

              <div className={classNames(
                buttonContainerStyles(onPhone, onTablet && ! onPhone)
              )}>
                <button type="submit">Submit</button>

                <button
                  type="button"
                  onClick={() => setIsTodoEditing(false)}
                >
                  Cancel
                </button>             
              </div>
            </form>
          )}
        </>
      )}

      {messages.length > 0 && (
        messages.map(message => {
          if (message && message.length > 0) {
            return (
              (
                <div className={classNames(
                  messageStyles(onPhone, onTablet && ! onPhone, message !== 'Successfully updated')
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

export default TodoInfo;
