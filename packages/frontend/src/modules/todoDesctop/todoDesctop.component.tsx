import * as React from 'react';
import classNames from 'classnames';

import { useUsersSelector } from '~/hooks/useUsersSelector';
import { TodoType } from '~shared/services/types';
import { rowStyles, linkStyles } from './todoDesctop.styles';
import { NavLink } from 'react-router-dom';
import { ROUTER_KEYS } from '~shared/keys';

type Props = {
  todo: TodoType,
}

const TodoDesctopCard: React.FunctionComponent<Props> = ({ todo }) => {
  const { user } = useUsersSelector();

  return (
	  <tr
      className={classNames(
        rowStyles
      )}
    >
      <th>{`${todo.userId === user.id ? 'Your' : todo.userName}'s`}</th>
      <th>{todo.title}</th>
      <th>{todo.isCompleted ? 'Completed' : 'Active'}</th>
      <th>{todo.isPprivate ? 'true' : 'false'}</th>
      <th>
        <NavLink
          className={classNames(
            linkStyles
          )}
          to={`${ROUTER_KEYS.DASHBOARD}/${todo.id}`}
        >
        </NavLink>
      </th>     
    </tr>
  );
};

export default TodoDesctopCard;
