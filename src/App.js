import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

useEffect(() => {
  axios.get('http://localhost:5000/todos')
    .then(response => setTodos(response.data))
    .catch(error => console.error(error));
}, []);

import TodoForm from './TodoForm';
const App = () => {
  // ... (existing code)
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

import TodoForm from './TodoForm';
import './styles/App.css'; // Import the custom styles
const App = () => {
  // ... (existing code)
  return (
    <div className="container">
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
