import { useState } from 'react'
import './App.css'

function App() {
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <div>
      <h2 style={{ color: isUrgent ? "red" : "black"}}>Task Status</h2>
      <button onClick={() => setIsUrgent(!isUrgent)}>Toggle Urgency</button>
    </div>
  )
}

export default App
