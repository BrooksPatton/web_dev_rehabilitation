import React from 'react';
import { connect } from 'react-redux';
import Task from '../task/Task';
import createSelector from 'selectorator';

const taskList = createSelector({ tasks: 'tasks' });
const AllTasksConnectedToRedux = connect(taskList)(AllTasks);

function AllTasks({ tasks }) {

    return (
        <section className="Task">
            <ol>
                {tasks.map(task => <li key={task.id}><Task task={task} /></li>)}
            </ol>
        </section>
    );
}

export default AllTasksConnectedToRedux;