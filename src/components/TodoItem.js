import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { voteAtom } from '../atoms/voteAtom';

const TodoItem = ({ todo }) => {
  const [votes, setVotes] = useRecoilState(voteAtom);

  const handleVote = (id) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [id]: (prevVotes[id] || 0) + 1
    }));
  };

  return (
    <div className="todo-item">
      <Link to={`/detail/${todo.id}`}>
        <p>{todo.text} - {todo.user}</p>
      </Link>
      <div>
        <span className="vote-count">Votes: {votes[todo.id] || 0}</span>
        <button onClick={() => handleVote(todo.id)}>Vote</button>
      </div>
    </div>
  );
};

export default TodoItem;
