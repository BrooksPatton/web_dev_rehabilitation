import React from 'react';
import './Task.css';

// turn into stateful class
// when click edit 
//    now in editing state
//    show task in input field
//    change edit button to say save
//    add cancel button
//    on form submit, save task to master list

function Task({ task }) {
    return (
        <section className="Task">
            <div>
                <label htmlFor={`${task.id}-task`}></label>
                <input type="checkbox" id={`${task.id}-task`}></input>
                {task.name}
            </div>
            <div>
                <button className="Task-edit">Edit</button>
                <button className="Task-delete">X</button>
            </div>
        </section>
    )
}

export default Task;