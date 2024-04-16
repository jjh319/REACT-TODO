import { useState } from 'react';

function App() {
    // const [count, setCount] = useState(0);
    const [inputText, setInputText] = useState('');
    // state = 컴포넌트가 기억해야 할 특정 값

    const handleInput = (event) => {
        console.log(event);
        const value = event.target.value;
        setInputText(value);
    };

    const handleClick = () => {
        console.log('clicked');
        localStorage.setItem(inputText, inputText);
    };

    return (
        <div>
            <h1>TODO 앱</h1>
            <div>
                <input type="text" value={inputText} onChange={handleInput} />
                <button onClick={handleClick}>add</button>
            </div>
        </div>
    );
}

export default App;
