import React from 'react'

const TodoForm = () => {
  return (
    <div className="todo-form">
        <h2>Criar Tarefa</h2>
        <form>
            <input type="text" placeholder='Digitar título' />
            <select>
                <option value="">Selecionar Categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm