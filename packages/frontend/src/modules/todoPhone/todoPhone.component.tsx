import * as React from 'react';
import classNames from 'classnames';

import { TodoType } from '~shared/services/types';
import { rowStyles, containerStyles } from './todoPhone.styles';
import { NavLink } from 'react-router-dom';
import { useUsersSelector } from '~/hooks/useUsersSelector';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
  todo: TodoType,
  editingTodoId: string,
  setEditingTodoId: (id: string) => void,
}

const TodoTabletCard: React.FunctionComponent<Props> = ({ todo }) => {
  const { user } = useUsersSelector();

  return (
	  <NavLink
      to={`${ROUTER_KEYS.DASHBOARD}/${todo.id}`}
      className={classNames(
        rowStyles
      )}
    >
      <div>
        <div>{`${todo.userId === user.id ? 'Your' : todo.userName}'s`}</div>
        <div
          className={classNames(
            containerStyles
          )}
        >
          {todo.title}
        </div>
      </div>
              
      <div>
        <div>{todo.isCompleted ? 'Completed' : 'Active'}</div>
        <div
          className={classNames(
            containerStyles
          )}
        >
          {todo.isPprivate ? 'Private' : 'Free'}
        </div>
      </div>
    </NavLink>
  );
};

export default TodoTabletCard;
