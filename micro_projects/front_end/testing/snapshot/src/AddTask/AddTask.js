import React, { useState } from 'react';

function AddTask({ addTask }) {
    const [taskToAdd, setTaskToAdd] = useState('');

    const handleAddTask = event => {
        event.preventDefault();

        addTask(taskToAdd);
        setTaskToAdd('');
    }

    const handleAddTaskChange = event => {
        setTaskToAdd(event.target.value);
    }

    return (
        <section className="AddTask">
            <form onSubmit={handleAddTask}>
                <label>
                    <h1>Add Task</h1>
                    <input type="text" value={taskToAdd} onChange={handleAddTaskChange} />
                </label>
                <button>Add</button>
            </form>
        </section>
    )
}

export default AddTask;