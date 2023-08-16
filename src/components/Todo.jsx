import { useSetRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";

// useRecoilState
// useRecoilValue if we need to only read the state.

const Todo = ({ id, text }) => {
  console.log(text, id);
  const setTodos = useSetRecoilState(todoState);
  const deleteTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
};

export default Todo;
