import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import todoSerivce from '~shared/services/todo.service';
import { useTodosStore } from '~store/todo.store';

import {
  todoListStyles, titleStyles, addButtonStyles, tableContainerStyles,
  tableStyles, tableHeadStyles, rowStyles, messageStyles,
} from './todoList.styles';
import { sliderPhone, swiper, slide, swiperContainer, sliderButton} from './todoListGadget.styles';
import classNames from 'classnames';

import TodoPhoneCard from '../todoPhone/todoPhone.component';
import TodoTabletCard from '../todoTablet/todoTablet.component';
import TodoDesctopCard from '../todoDesctop/todoDesctop.component';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import { useUsersStore } from '~store/user.store';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
}

const TodoList: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const [editingTodoId, setEditingTodoId] = React.useState<string | null>(null);
  const setUser = useUsersStore(state => state.setUser);
  const todos = useTodosStore(state => state.todos);
  const setTodos = useTodosStore(state => state.setTodos);
  const setAreTodosLoading = useTodosStore(state => state.setIsLoading);
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
    setAreTodosLoading(true);
    setMessages([]);

    try {
      const { todos, message } = await todoSerivce.getAllTodos.call(todoSerivce);

      setMessages([message]);

      if (message === 'Unauthorized') {
        setUser(null);
      } else if (todos) {
        setTodos(todos);
      }
    } catch (error) {
      setMessages([error.message]);
    } finally {
      setAreTodosLoading(false);
    } 
  };

  React.useEffect(() => {
    loadTodos();
  }, []);

  return (
	  <>
      <div className={classNames(
        todoListStyles()
      )}>
        <h1 className={classNames(
          titleStyles(onPhone)
        )}>
          Todos
        </h1>

        <NavLink
          to={ROUTER_KEYS.ADDTODO}
          className={classNames(
            addButtonStyles(onPhone, (onTablet && !onPhone))
          )}
        >
          Lets add something to do?
        </NavLink>

        {todos.length > 0 && (
          <>
            {(onTablet && onPhone) && (
              <div className={classNames(
                sliderPhone()
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
                swiperContainer()
              )}>
                <button
                  className={classNames(
                    sliderButton(),
                  )}
                  onClick={handlePrev}
                >
                  {'<'}
                </button>

                <Swiper
                  className={classNames(
                    swiper()
                  )}
                  spaceBetween={0}
                  slidesPerView={1}
                  ref={sliderRef}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  
                  {todos.map(todo => (
                    <SwiperSlide key={todo.id} className={classNames(
                      slide()
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
                    sliderButton(),
                  )}
                  onClick={handleNext}
                >
                {'>'}
                </button>
              </div>
            )}

            {(!onPhone && !onTablet) && (
              <div className={classNames(
                tableContainerStyles()
              )}>
                <table className={classNames(
                  tableStyles()
                )}>
                  <thead className={classNames(
                    tableHeadStyles()
                  )}>
                    <tr className={classNames(
                      rowStyles()
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
                  messageStyles(onPhone, onTablet && ! onPhone, true)
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
