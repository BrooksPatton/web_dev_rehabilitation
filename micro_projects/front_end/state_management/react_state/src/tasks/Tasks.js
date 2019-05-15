import React from 'react';
import Task from '../task/Task';

function Tasks({ tasks }) {
    // console.log(tasks);

    return (
        <section className="Task">
            <ol>
                {tasks.map(task => <li key={task.id}><Task task={task}></Task></li>)}
            </ol>
        </section>
    );
}

export default Tasks;