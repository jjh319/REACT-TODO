import { useState } from "react";

function TodoInput() {
  const [inputText, setInputText] = useState("");

  const handleInput = (event) => {
    console.log(event);
    const value = event.target.value;
    setInputText(value);
  }; // handleInput

  const handleClick = () => {
    console.log("clicked");
    localStorage.setItem(inputText, inputText);
    // setInputText("");
    // todos.push(inputText);
    // 배열 상태 추가 방식
    setTodos((currentTodos) => {
      return [...currentTodos, inputText];
    });
    setInputText("");
  }; // handleClick

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInput} />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default TodoInput;
