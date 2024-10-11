import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, text: 'Task 1', completed: false },
    { id: 1, text: 'Task 2', completed: false },
    { id: 2, text: 'Task 3', completed: false }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { id: tasks.length, text: task, completed: false }]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="app">
      <h1>Daily Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>You have {pendingTasks} tasks remaining</h2>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
