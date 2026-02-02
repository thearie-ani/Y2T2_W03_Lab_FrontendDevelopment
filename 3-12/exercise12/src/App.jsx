import { useState } from 'react';
import './App.css';

function TodoItem ({ text, onRemove}){
  return (
    <li>
      {text} <button onClick={onRemove}>Delete</button>
    </li>
  )
}

function App() {
  const [list, setList] = useState(["Eat", "Sleep", "Code"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    setList([...list, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {list.map((item, index) => (
          <TodoItem key={index} text={item} onRemove={() => deleteTask(index)} />
        ))}
      </ul>
      <button onClick={() => deleteTask(list.length-1)}>Delete Task</button>
    </>
  );
}

export default App;
