import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TaskListView from './components/TaskListView';
import AddTaskView from './components/AddTaskView';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<TaskListView />} />
          <Route path="/add" element={<AddTaskView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
