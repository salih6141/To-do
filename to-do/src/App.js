import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todos, setTodos] = react.useState([ //defining a javascript todo list wich will contain the todos
    {
      text: "test ToDo",
      isDone: false
    }
  ]);

  // now we need a function that adds todos to the list
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos) //we use settodos to set the new todos in the list
  };

  // we also need a marking funciton to mark todos that are done.
  const doneTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  //now we need the last function wich is to delete todos
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
