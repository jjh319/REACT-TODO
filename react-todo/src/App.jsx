import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  } // for

  return result;
} // fetchTodos

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const handleRemove = (todo, index) => {
    // console.log(todo, index);
    // todos.splice(index, 1); // splice = 배열의 몇번째 인덱스값에서 몇개를 지우겠다.
    const result = todos.filter((todoItem) => {
      if (todoItem !== todo) {
        return true;
      } // if
    }); // filter

    setTodos(result);
    localStorage.removeItem(todo);
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => handleRemove(todo, index)}>
                  remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ); // return
} // App

export default App;
