import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

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
  ]);
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => (task.id !== id)))
  };
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder } : task)))
  }
  
  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : <div style={{ color: "gray", }}>No Tasks to Show!</div>
      }
    </div>
  );
}

export default App;
