import React, { useState } from 'react';
import './Task.css';

function Task({ task, editTaskName, toggleTaskCompletedStatus, removeTaskById }) {
    const [editing, setEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.name);

    const renderEditing = () => (
        <form onSubmit={handleSaveChangeToTask}>
            <label htmlFor={`Task-edit-${task.id}`}></label>
            <input type="text" value={editedTaskName} id={`Task-edit-${task.id}`} onChange={handleEditTaskChange}></input>
        </form>
    )

    const handleEditTaskChange = event => setEditedTaskName(event.target.value);

    const renderEditButton = () => (
        <button className="Task-edit" onClick={() => setEditing(true)}>Edit</button>
    )

    const renderSaveButton = () => (
        <button className="Task-edit" onClick={handleSaveChangeToTask}>Save</button>
    )

    const handleSaveChangeToTask = event => {
        event.preventDefault();

        editTaskName({ id: task.id, name: editedTaskName });
        setEditing(false);
    }

    const renderCancelEditButton = () => (
        <button className="Task-edit" onClick={cancelEdit}>Cancel</button>
    )

    const cancelEdit = () => {
        setEditing(false);
        setEditedTaskName(task.name);
    }

    const toggleCompletedStatus = () => toggleTaskCompletedStatus(task.id)

    const renderTaskName = () => (
        <span className={task.completed ? 'Task-completed' : null}>{task.name}</span>
    )

    const removeTask = () => removeTaskById(task.id);

    return (
        <section className="Task">
            <div className="Task-name">
                <label htmlFor={`${task.id}-task`}></label>
                <input type="checkbox" id={`${task.id}-task`} onChange={toggleCompletedStatus} checked={task.completed}></input>
                {editing ? renderEditing() : renderTaskName()}
            </div>
            <div>
                {editing ? renderSaveButton() : renderEditButton()}
                {editing ? renderCancelEditButton() : null}
                <button className="Task-delete" onClick={removeTask}>X</button>
            </div>
        </section>
    )
}

export default Task;