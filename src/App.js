import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';

function Home() {
  return (
    <div>
      <h1>🐳 Docker React App</h1>
      <p>Welcome to your Dockerized React application!</p>
      <p>This app is running in a Docker container with hot reload enabled.</p>
    </div>
  );
}



function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
