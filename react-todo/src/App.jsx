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
  const todos = fetchTodos();

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
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  ); // return
} // App

export default App;
