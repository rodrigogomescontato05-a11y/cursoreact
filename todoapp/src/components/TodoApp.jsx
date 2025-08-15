import React from 'react'

const TodoApp = ({ todo }) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p>{todo.category}</p>
            </div>
            <div>
                <button className='complete'>Completar</button>
                <button className='remove'> X </button>
            </div>
        </div>
            )
}
export default TodoApp