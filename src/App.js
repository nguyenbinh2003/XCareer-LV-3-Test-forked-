import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [todoDoneCount, setTodoDoneCount] = useState(3);
  const todoListItem = [
    {
      title: "Build some websites",
      done: false
    },
    { title: "Do excercises", done: false },
    { title: "Go shopping", done: false },
    { title: "House cleaning", done: true }
  ];

  const [itemTodo, setItemTodo] = useState(todoListItem);
  const [valueSubmit, setValueSubmit] = useState("");

  const onChangeValue = (e) => {
    setValueSubmit(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (valueSubmit) {
      setItemTodo([
        ...itemTodo,
        {
          title: valueSubmit,
          done: false
        }
      ]);
      setTodoDoneCount(todoDoneCount + 1);
    }
  };

  const handleCheckDone = (i) => {
    const updateItemTodo = itemTodo;
    updateItemTodo[i].done = !updateItemTodo[i].done;
    setItemTodo(updateItemTodo);
    setTodoDoneCount(todoDoneCount - 1);
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader count={todoDoneCount} />
        <TodoList itemTodo={itemTodo} onClick={handleCheckDone} />
        <Form
          onChangeValue={onChangeValue}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
      <Footer />
    </div>
  );
};
