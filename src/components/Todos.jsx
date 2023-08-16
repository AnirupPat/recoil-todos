import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import Todo from "./Todo";

// useRecoilState hook will take an atom/selector.

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random, text: inputText },
    ]);
    console.log(todos);
    setInputText("");
  };

  const clearTodo = () => {
    setTodos([]);
  };

  const onTextChange = (e) => {
    setInputText(e.target.value);
  };

  console.log(todos);
  return (
    <main>
      <input
        value={inputText}
        onChange={onTextChange}
        type="text"
        id="todoInput"
      />
      <button onClick={addTodo}>Add Todos</button>
      <button onClick={clearTodo}>Clear Todos</button>
      {todos.map((todo) => {
        return <Todo text={todo.text} key={todo.id} id={todo.id} />;
      })}
    </main>
  );
};

export default Todos;
