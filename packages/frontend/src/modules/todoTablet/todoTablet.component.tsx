import * as React from 'react';
import classNames from 'classnames';

import { TodoType } from '~shared/services/types';
import { cardStyles, buttonStyles } from './todoTablet.styles';
import { NavLink } from 'react-router-dom';
import { useUsersStore } from '~store/user.store';

type Props = {
  onTablet: boolean,
  onPhone: boolean,
  todo: TodoType,
  editingTodoId: string,
  setEditingTodoId: (id: string) => void,
}

const TodoTabletCard: React.FunctionComponent<Props> = ({ todo }) => {
  const user = useUsersStore(state => state.user);

  return (
	  <NavLink
      to={`/dashboard/${todo.id}`}
      className={classNames(
        cardStyles()
      )}
    >
        <div>
          <span>Creator:</span>
          <div>{`${todo.userId === user.id ? 'You' : todo.userName}`}</div>
        </div>
        
  
        <div>
          <span>Title:</span>
          <div>
            {todo.title}
          </div>
        </div>
                
        <div>
          <span>Progress:</span>
          <div>{todo.isCompleted ? 'Completed' : 'Active'}</div>
        </div>
    
        <div>
          <span>Privity:</span>
          <div>{todo.isPprivate ? 'Private' : 'Free'}</div>
        </div>
    </NavLink>
  );
};

export default TodoTabletCard;
