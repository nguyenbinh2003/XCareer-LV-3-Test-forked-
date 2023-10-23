import { useState } from "react";
import TodoItem from "./TodoItemContainer";

const TodoList = (props) => {
  const { itemTodo, onClick } = props;

  return (
    <div className="todo-list-container">
      {itemTodo.map((item, index) => (
        <TodoItem item={item} onClick={onClick} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
