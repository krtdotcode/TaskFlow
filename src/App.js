import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = async (taskDetails) => {
    await new Promise(resolve => setTimeout(resolve, 800)); // simulate processing time
    const newTask = { ...taskDetails, id: Date.now() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<TaskListView tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/add" element={<AddTaskView addTask={addTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
