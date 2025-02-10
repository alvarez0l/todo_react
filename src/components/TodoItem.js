import React from 'react';

// function changeCheckbox() {
//     console.log("test")
// }

function TodoItem(props) {
    return(
        <div className='todo-item' style={{display: props.user.text ? "block" : "none"}}>
            <input type="checkbox" onChange={(event) => props.handleChange(props.user.id)} checked={props.user.completed}></input>
            <span>{props.user.text}</span>
        </div>
    )
};

export default TodoItem;