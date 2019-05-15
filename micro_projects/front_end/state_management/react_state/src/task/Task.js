import React from 'react';
import './Task.css';

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