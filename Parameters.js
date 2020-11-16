import React from 'react';
import Todo from './Todo';
import {useSelector} from 'react-redux'

const Parameters = () => {
    const AllTodos = useSelector((state) => state.todo)
    return (
        <div> 
            {AllTodos.map(todo => {
                return <Todo key={todo.id} text={todo.text} value={todo.value} />
            })}
        </div>
    )
};


export default Parameters;