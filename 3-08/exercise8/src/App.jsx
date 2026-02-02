import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState("Task 1");
  const [input, setInput] = useState("");
  const addTask = () => {
    setList([...list, input])
    setInput("");
  }

  return (
    <div>
      <input type="text" value={input} onChange= {(e) => setInput(e.target.value)}/>
      <button onClick={addTask}>Add</button>
      <p>{list}</p>
    </div>
  )
}

export default App
