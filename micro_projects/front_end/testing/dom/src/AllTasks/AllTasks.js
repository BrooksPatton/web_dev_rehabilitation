import React from 'react';
import Task from '../task/Task';

function AllTasks({ tasks, editTaskName, toggleTaskCompletedStatus, removeTaskById }) {

    return (
        <section className="Task">
            <ol>
                {tasks.map(task => <li key={task.id}><Task task={task} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus} removeTaskById={removeTaskById}></Task></li>)}
            </ol>
        </section>
    );
}

export default AllTasks;