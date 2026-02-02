
import './App.css'

function ToDoItem(){  return <li>A Single Task</li>;  }

function TodoList(){
  return (
    <ul>
      <ToDoItem/>
      <ToDoItem/>
    </ul>
  );
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <TodoList/>
      
    </div>
  );
  
}

export default App
