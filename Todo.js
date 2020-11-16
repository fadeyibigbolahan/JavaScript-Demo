import React from 'react'

const Todo = (props) => {
    return (
        <div>
            <p>{props.text}, {props.value}</p>
        </div>
    )
};

export default Todo;