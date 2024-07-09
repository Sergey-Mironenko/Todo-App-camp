import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TodoService from '~shared/services/todo.service';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { useTodosSelector } from '~/hooks/useTodosSelector';

import {
  todoListStyles,
  titleStyles, phoneTitleStyles,
  addButtonStyles, phoneAddButtonStyles, tabletAddButtonStyles,
  tableContainerStyles,
  tableStyles, tableHeadStyles, rowStyles,
  messageStyles, errorMessageStyles, phoneMessageStyles, tabletMessageStyles } from './todoList.styles';
import { sliderStyles, swiperStyles, slideStyles, swiperContainerStyles, sliderButtonStyles} from './todoListGadget.styles';
import classNames from 'classnames';

import TodoPhoneCard from '../todoPhone/todoPhone.component';
import TodoTabletCard from '../todoTablet/todoTablet.component';
import TodoDesctopCard from '../todoDesctop/todoDesctop.component';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
}

const TodoList: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const [editingTodoId, setEditingTodoId] = React.useState<string | null>(null);
  const { setUser } = useUsersSelector();
  const { todos, setTodos, setIsTodoLoading } = useTodosSelector();
  const todoService = new TodoService(setUser);
  const [messages, setMessages] = React.useState([]);
  const sliderRef = React.useRef(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const loadTodos = async() => {
    setIsTodoLoading(true);
    setMessages([]);

    try {
      const { todos, message } = await todoService.getAllTodos.call(todoService);

      setMessages([message]);

      if (todos) {
        setTodos(todos);
      }
    } catch (error) {
      setMessages([error.message]);
    } finally {
      setIsTodoLoading(false);
    } 
  };

  React.useEffect(() => {
    loadTodos();
  }, []);

  return (
	  <>
      <div className={classNames(
        todoListStyles
      )}>
        <h1 className={classNames(
          titleStyles,
          { [phoneTitleStyles]: onPhone },
        )}>
          Todos
        </h1>

        <NavLink
          to={ROUTER_KEYS.ADDTODO}
          className={classNames(
            addButtonStyles,
            { [phoneAddButtonStyles]: onPhone },
            { [tabletAddButtonStyles]: onTablet && !onPhone },
          )}
        >
          Lets add something to do?
        </NavLink>

        {todos.length > 0 && (
          <>
            {(onTablet && onPhone) && (
              <div className={classNames(
                sliderStyles
              )}>
                {todos.map(todo => (
                  <TodoPhoneCard
                    onTablet={onTablet}
                    onPhone={onPhone}
                    todo={todo}
                    editingTodoId={editingTodoId}
                    setEditingTodoId={setEditingTodoId}
                    key={todo.id}
                  />
                ))}
              </div>
            )}

            {(onTablet && !onPhone) && (
              <div className={classNames(
                swiperContainerStyles
              )}>
                <button
                  className={classNames(
                    sliderButtonStyles
                  )}
                  onClick={handlePrev}
                >
                  {'<'}
                </button>

                <Swiper
                  className={classNames(
                    swiperStyles
                  )}
                  spaceBetween={0}
                  slidesPerView={1}
                  ref={sliderRef}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  
                  {todos.map(todo => (
                    <SwiperSlide key={todo.id} className={classNames(
                      slideStyles
                    )}>
                      <TodoTabletCard
                        onTablet={onTablet}
                        onPhone={onPhone}
                        todo={todo}
                        editingTodoId={editingTodoId}
                        setEditingTodoId={setEditingTodoId}
                        key={todo.id}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className={classNames(
                    sliderButtonStyles
                  )}
                  onClick={handleNext}
                >
                {'>'}
                </button>
              </div>
            )}

            {(!onPhone && !onTablet) && (
              <div className={classNames(
                tableContainerStyles
              )}>
                <table className={classNames(
                  tableStyles
                )}>
                  <thead className={classNames(
                    tableHeadStyles
                  )}>
                    <tr className={classNames(
                      rowStyles
                    )}>
                      <th>Name</th>
                      <th>Title</th>
                      <th>Completed</th>
                      <th>Private</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map(todo => (
                      <TodoDesctopCard todo={todo} key={todo.id} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      {!todos && (
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

export default TodoList;
