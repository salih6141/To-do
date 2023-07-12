import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Todo({todo, index, doneTodo, deleteTodo}) {
  return(
    <div className='todo'>
      <span style={{ textDecoration: todo.isDone ? "line-through": ""}}>{todo.text}</span>
      <div>
        <Button variant="outline-succes" onClick={() => doneTodo(index)}>√</Button>{''}
        <Button variant="outline-danger" onClick={() => deleteTodo(index)}>x</Button>
      </div>
    </div>
  )
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type='text' className='input' value={value} onChange={e => setValue(e.target.value)} placeholder='Add new item' />
      </Form.Group>
      <Button variant='primary mb-3' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

function App() {
  const [todos, setTodos] = React.useState([ //defining a javascript todo list wich will contain the todos
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
      <div className="container">
        <h1 className='text-center mb-4'>Todo</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo key={index} index={index} todo={todo} doneTodo={doneTodo} deleteTodo={deleteTodo} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
