import React from 'react';
import renderer from 'react-test-renderer';

import Task from './Task';

it('should render the Task component with a task', () => {
    const task = {
        id: 1,
        name: 'I am a task name',
        completed: false
    };

    const functionMock = () => { };

    const tree = renderer
        .create(<Task task={task} editTaskName={functionMock} toggleTaskCompletedStatus={functionMock} removeTaskById={functionMock} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('should render the Task component with a completed task', () => {
    const task = {
        id: 1,
        name: 'I am a completed task',
        completed: true
    };

    const functionMock = () => { };

    const tree = renderer
        .create(<Task task={task} editTaskName={functionMock} toggleTaskCompletedStatus={functionMock} removeTaskById={functionMock} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});