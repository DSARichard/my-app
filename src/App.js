import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "Stuff",
      time: {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      reminder: false,
    }
  ])
  
  const str = ("b" + "a" + + "a" + "a").toLowerCase();
  let num = Math.max();
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
      <div style={{ color: "goldenrod", }}>{str}</div>
      <div style={{ color: "goldenrod", }}>{num}</div>
    </div>
  );
}

export default App;
