import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { todoService } from '~shared/services/todo.service';
import { useTodosSelector } from '~/hooks/useTodosSelector';
import { useUsersSelector } from '~/hooks/useUsersSelector';

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
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';
import Filter from '~modules/filter/filter.component';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
}

const TodoList: React.FunctionComponent<Props> = ({ onTablet, onPhone }) => {
  const [editingTodoId, setEditingTodoId] = React.useState<string | null>(null);
  const { user } = useUsersSelector();
  const { todos, page, setPage, setTodos, setIsTodoLoading } = useTodosSelector();
  const [messages, setMessages] = React.useState([]);
  const { search } = useLocation();
  const sliderRef = React.useRef(null);
  const scrollRef = React.useRef(null);
  const pagesAmount = 10;
  const scroll = document.querySelector(".phoneList");
  const scrollListener = (event) => {  
    scrollRef.current.scrollTop = scroll.getBoundingClientRect().top;
    loadTodos();
  }

  const resetPage = () => setPage(0);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    const lastIndex = todos.length - 1;
  
    if (!sliderRef.current) return;

    if (sliderRef.current.swiper.activeIndex === lastIndex) {
      scrollRef.current.activeIndex = lastIndex;
      loadTodos();
    }

    sliderRef.current.swiper.slideNext();
  }, []);

  const nextPage = () => {
    setPage(page + 1);
    loadTodos();
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
      loadTodos();
    }
  };

  const loadTodos = async() => {
    setIsTodoLoading(true);
    setMessages([]);

    try {
      const { todosFromServer, pageFromServer, message } = await todoService.getAllTodos.call(todoService, { id: user.id, currentPage: page, amount: pagesAmount }, search && `${search.slice(1)}`);

      setMessages([message]);

      if (todos) {
        if (onPhone || onTablet) {
          setTodos([
            ...todos,
            todosFromServer,
          ]);
        } else {
          setTodos(todos);
          setPage(pageFromServer);
        }
      }
    } catch (error) {
      setMessages([error.message]);
    } finally {
      setIsTodoLoading(false);
    } 
  };

  React.useEffect(() => {
    resetPage();
  }, [search]);

  React.useEffect(() => {
    loadTodos();
  }, [search]);

  React.useEffect(() => {
    scroll.addEventListener("scrollend", scrollListener);

    return () => scroll.removeEventListener("scrollend", scrollListener);
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

        <Filter onPhone={onPhone} onTablet={onTablet && !onPhone} />

        {todos.length > 0 && (
          <>
            {(onTablet && onPhone) && (
              <div className={classNames(
                'phoneList',
                sliderStyles,
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
              <>
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

                <div>
                  <button
                    disabled={page === 0}
                    onClick={prevPage}
                  >
                    {'<'}
                  </button>

                  <div>
                    {page + 1}
                  </div>

                  <button
                    onClick={nextPage}
                  >
                    {'>'}
                  </button>
                </div>
              </>
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
