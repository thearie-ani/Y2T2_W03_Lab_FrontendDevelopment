
import './App.css'

function ToDoItem(){  return <li>A Single Task</li>;  }

function App() {

  return (
    <div>
      
      <ul>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
      </ul>
      <h3>Hello</h3>

    </div>
  )
}

export default App

