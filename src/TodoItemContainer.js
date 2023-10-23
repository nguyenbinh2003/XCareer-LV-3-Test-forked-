import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoItem = (props) => {
  const { item, index, onClick } = props;
  const { title, done } = item;

  const nameClass = `todo-item-container ${done ? "done" : ""}`;
  return (
    <div className={nameClass} key={index}>
      <input type="checkbox" hidden id="input" onClick={() => onClick(index)} />
      <label for="input">
        {done ? (
          <FaRegCheckCircle color="#9a9a9a" className="item-done-button" />
        ) : (
          <FaRegCircle className="item-done-button" color="#9a9a9a" />
        )}
      </label>
      <div className="item-title">{title}</div>
      <div>{index}</div>
    </div>
  );
};

export default TodoItem;
