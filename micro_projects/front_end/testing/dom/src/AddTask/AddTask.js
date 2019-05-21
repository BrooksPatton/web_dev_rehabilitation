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
                <label htmlFor="AddTask">
                    <h1>Add Task</h1>
                    <input type="text" value={taskToAdd} onChange={handleAddTaskChange} id="AddTask" data-testid="AddTask" />
                </label>
                <button>Add</button>
            </form>
        </section>
    )
}

export default AddTask;