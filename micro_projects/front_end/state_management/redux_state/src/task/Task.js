import React from 'react';
import { connect } from 'react-redux';
import './Task.css';
import { editTaskName, toggleTaskCompletion, deleteTask, updateEditedTaskName, toggleEditedStatus, saveEditedTaskName } from '../store/store';

function TaskComponent({ task, updateEditedTaskName, toggleTaskCompletion, toggleEditedStatus, saveEditedTaskName, deleteTask }) {
    const renderEditing = () => (
        <form onSubmit={handleSaveEditedTaskName}>
            <label htmlFor={`Task-edit-${task.id}`}></label>
            <input type="text" value={task.editedName} id={`Task-edit-${task.id}`} onChange={event => updateEditedTaskName({ id: task.id, editedName: event.target.value })}></input>
        </form>
    )

    const handleSaveEditedTaskName = event => {

        event.preventDefault();
        saveEditedTaskName(task.id);
    }

    const renderEditButton = () => (
        <button className="Task-edit" onClick={() => toggleEditedStatus(task.id)}>Edit</button>
    )

    const renderSaveButton = () => (
        <button className="Task-edit" onClick={handleSaveEditedTaskName}>Save</button>
    )

    const renderCancelEditButton = () => (
        <button className="Task-edit" onClick={() => toggleEditedStatus(task.id)}>Cancel</button>
    )

    const toggleCompletedStatus = () => toggleTaskCompletion(task.id)

    const renderTaskName = () => (
        <span className={task.completed ? 'Task-completed' : null}>{task.name}</span>
    )

    return (
        <section className="Task">
            <div className="Task-name">
                <label htmlFor={`${task.id}-task`}></label>
                <input type="checkbox" id={`${task.id}-task`} checked={task.completed} onChange={toggleCompletedStatus}></input>
                {task.editing ? renderEditing() : renderTaskName()}
            </div>
            <div>
                {task.editing ? renderSaveButton() : renderEditButton()}
                {task.editing ? renderCancelEditButton() : null}
                <button className="Task-delete" onClick={() => deleteTask(task.id)}>X</button>
            </div>
        </section>
    )
}

const Task = connect(null, { editTaskName, toggleTaskCompletion, deleteTask, updateEditedTaskName, toggleEditedStatus, saveEditedTaskName })(TaskComponent);

export default Task;