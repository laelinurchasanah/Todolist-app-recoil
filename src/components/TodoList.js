import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoAtom } from '../atoms/todoAtom';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useRecoilValue(todoAtom);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
