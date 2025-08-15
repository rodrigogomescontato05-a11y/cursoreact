import { useState } from 'react';
import TodoApp from './components/TodoApp';
import './App.css';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade",
      category: "Trabalho",
      isCompleted: false,
    },
        {
      id: 2,
      text: "ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
        {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ])
  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoApp todo={todo} />
          ))}
        </div>
        <TodoForm />
      </div>
    </>
  )
}

export default App
