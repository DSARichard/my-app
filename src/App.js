import './App.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "My Task",
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
  let date = new Date().toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit", hour12: false,
    minute: "2-digit",
    second: "2-digit",
  }).replaceAll(" ", "").replaceAll(",", "").replaceAll("/", "").replaceAll(":", "");
  let year = Number(date.substr(4, 4)), month = Number(date.substr(0, 2)), day = Number(date.substr(2, 2)),
    hour = Number(date.substr(8, 2)), minute = Number(date.substr(10, 2)), second = Number(date.substr(12, 2));
  console.log(year, month, day, hour, minute, second);
  
  const addTask = (task) => {
    const ids = tasks.map((task) => (task.id));
    const newId = (tasks.length > 0) ? Math.max(...ids) + 1 : 0;
    console.log(newId);
    console.log(task);
  };
  addTask.propTypes = {
    task: PropTypes.object,
  };
  
  const deleteTask = (id) => {
    const ids = tasks.map((task) => (task.id));
    const maxId = Math.max(...ids);
    const maxIdTask = tasks[ids.indexOf(maxId)];
    setTasks([
      ...tasks.filter((task) => (task.id !== id && task.id !== maxId)),
      (id !== maxId) ? { ...maxIdTask, id: id } : undefined
    ].filter((task) => (task !== undefined)));
  };
  deleteTask.propTypes = {
    id: PropTypes.number,
  };
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };
  toggleReminder.propTypes = {
    id: PropTypes.number,
  };
  
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {
        tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : <div className="task none">No Tasks to Show!</div>
      }
    </div>
  );
}

export default App;
