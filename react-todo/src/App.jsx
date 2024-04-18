import { useState } from "react";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  } // for

  return result;
} // fetchTodos

function App() {
  // const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  // state = 컴포넌트가 기억해야 할 특정 값
  // const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());

  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value;
    setInputText(value);
  }; // handleInput

  const handleClick = () => {
    console.log("clicked");
    localStorage.setItem(inputText, inputText);
    setInputText("");
  }; // handleClick

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
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={handleClick}>add</button>
      </div>
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
