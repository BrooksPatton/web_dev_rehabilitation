import React from 'react';
import renderer from 'react-test-renderer';

import AllTasks from './AllTasks';

it('should render the AllTasks component with tasks', () => {
    const tasks = [{
        id: 1,
        name: 'task name',
        completed: false
    }];
    const functionMock = () => { };

    const tree = renderer
        .create(<AllTasks tasks={tasks} editTaskName={functionMock} toggleTaskCompletedStatus={functionMock} removeTaskById={functionMock} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('should render AllTasks component without tasks', () => {
    const tasks = [];
    const functionMock = () => { };
    const tree = renderer
        .create(<AllTasks tasks={tasks} editTaskName={functionMock} toggleTaskCompletedStatus={functionMock} removeTaskById={functionMock} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});