import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { todoAtom } from "../atoms/todoAtom";
import { voteAtom } from "../atoms/voteAtom";

const DetailPage = () => {
  const { id } = useParams();
  const todos = useRecoilValue(todoAtom);
  const votes = useRecoilValue(voteAtom);

  const todo = todos.find((item) => item.id === parseInt(id));

  if (!todo) {
    return <p>Todo not found</p>;
  }

  return (
    <div className="container">
      <div className="detail-page">
        <h1>{todo.text}</h1>
        <p>Assigned to: {todo.user}</p>
        <p className="votes">Votes: {votes[todo.id] || 0}</p>
      </div>
    </div>
  );
};

export default DetailPage;
