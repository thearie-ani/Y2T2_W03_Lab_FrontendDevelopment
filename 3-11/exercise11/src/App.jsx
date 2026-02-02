import { useState } from 'react';
import './App.css';

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
          <li key={index}> {item} </li>
        ))}
      </ul>
      <button onClick={() => deleteTask(list.length-1)}>Delete Task</button>
    </>
  );
}

export default App;
