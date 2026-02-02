import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState(["Eat", "Sleep", "Code"]);
  const [input, setInput] = useState("");
    const addTask = () => {
      setList([...list, input])
      setInput("");
    }

  return (
    <>
      <input type="text" value={input} onChange= {(e) => setInput(e.target.value)}/>
      <button onClick={addTask}>Add</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </>
  )
}

export default App
