import * as React from 'react';
import classNames from 'classnames';

import { useUsersStore } from '~store/user.store';
import { TodoType } from '~shared/services/types';
import { rowStyles, linkStyles } from './todoDesctop.styles';
import { NavLink } from 'react-router-dom';

type Props = {
  todo: TodoType,
}

const TodoDesctopCard: React.FunctionComponent<Props> = ({ todo }) => {
  const user = useUsersStore(state => state.user);

  return (
	  <tr
      className={classNames(
        rowStyles(),
      )}
    >
      <th>{`${todo.userId === user.id ? 'Your' : todo.userName}'s`}</th>
      <th>{todo.title}</th>
      <th>{todo.isCompleted ? 'Completed' : 'Active'}</th>
      <th>{todo.isPprivate ? 'true' : 'false'}</th>
      <th>
        <NavLink
          className={classNames(
            linkStyles(),
          )}
          to={`/dashboard/${todo.id}`}
        >
        </NavLink>
      </th>     
    </tr>
  );
};

export default TodoDesctopCard;
