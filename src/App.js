import "./App.css";
import Todos from "./components/Todos";
import { useRecoilValue } from "recoil";
import { totalTodos } from "./state/selectors/TotalTodos";

// we have to wrap the app in the recoil root.
function App() {
  const totalTodoState = useRecoilValue(totalTodos);
  return (
    <div className="App">
      <h1>Hey</h1>
      <Todos />
      <h3>Total Todos: {totalTodoState}</h3>
    </div>
  );
}

export default App;
