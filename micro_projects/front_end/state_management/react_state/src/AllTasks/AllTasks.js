import React from 'react';
import Task from '../task/Task';

function AllTasks({ tasks, editTaskName, toggleTaskCompletedStatus }) {

    return (
        <section className="Task">
            <ol>
                {tasks.map(task => <li key={task.id}><Task task={task} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus}></Task></li>)}
            </ol>
        </section>
    );
}

export default AllTasks;