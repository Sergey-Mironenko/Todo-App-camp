import * as React from 'react';
import classNames from 'classnames';

import { TodoType } from '~shared/services/types';
import { rowStyles, containerStyles, buttonStyles } from './todoPhone.styles';
import { NavLink } from 'react-router-dom';
import { useUsersStore } from '~store/user.store';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
  todo: TodoType,
  editingTodoId: string,
  setEditingTodoId: (id: string) => void,
}

const TodoTabletCard: React.FunctionComponent<Props> = ({
  onTablet,
  onPhone,
  todo,
  editingTodoId,
  setEditingTodoId,
}) => {
  const user = useUsersStore(state => state.user);

  return (
	  <NavLink
      to={`/dashboard/${todo.id}`}
      className={classNames(
        rowStyles((onTablet && !onPhone), todo.userName === 'You')
      )}
    >
      <div>
        <div>{`${todo.userId === user.id ? 'Your' : todo.userName}'s`}</div>
        <div
          className={classNames(
            containerStyles(onTablet && !onPhone)
          )}
        >
          {todo.title}
        </div>
      </div>
              
      <div>
        <div>{todo.isCompleted ? 'Completed' : 'Active'}</div>
        <div
          className={classNames(
            containerStyles(onTablet && !onPhone)
          )}
        >
          {todo.isPprivate ? 'Private' : 'Free'}
        </div>
      </div>

      {todo.userName === 'You' && (
        <button
          className={classNames(
            buttonStyles((onTablet && !onPhone))
          )}
          disabled={editingTodoId !== null}
          onClick={() => setEditingTodoId(todo.id)}
        >
          Edit
        </button>
      )}
    </NavLink>
  );
};

export default TodoTabletCard;
