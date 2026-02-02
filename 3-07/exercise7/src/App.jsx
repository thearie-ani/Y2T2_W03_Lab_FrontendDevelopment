import React, {useState} from 'react';
import './App.css'

function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" value = {text} onChange={(e) => setText(e.target.value)}/>
      <p>You are typing: {text}</p>
      <h1>Hello {text}</h1>
    </div>
  )
}

export default App
