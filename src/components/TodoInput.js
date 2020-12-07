import React, { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "../context/TodoProvider";
import shortid from "shortid";

const TodoInput = (props) => {
  const inputRef = useRef();
  const todoContext = useContext(TodoContext);
  const { createTodo, currentTodo, updateTodo } = todoContext;
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTodo != null) {
      setTitle(currentTodo.title);
      inputRef.current.focus();
    }
  }, [currentTodo]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentTodo != null) {
      const updated_todo = {
        id: currentTodo.id,
        title,
        completed: currentTodo.completed,
      };
      updateTodo(updated_todo);
    } else {
      const new_todo = {
        id: shortid.generate(),
        title,
        completed: false,
      };
      createTodo(new_todo);
    }

    setTitle("");
    inputRef.current.blur();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        className={`todo-input ${currentTodo != null ? `update` : null}`}
        placeholder="Enter your todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={inputRef}
      />
    </form>
  );
};

export default TodoInput;
