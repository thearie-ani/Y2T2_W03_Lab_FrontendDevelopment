import './App.css'

function App() {
  const tasks = ["Learn JSX", "Create Componment", "Master State"];
  return (
    <div className="App">
      <h1>My Task List</h1>
      <ul>
        <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li>
      </ul>

    </div>
  )
}

export default App
