import React from 'react';
import renderer from 'react-test-renderer';

import AddTask from './AddTask';

it('should render correctly', () => {
    const addTaskMock = () => { };

    const tree = renderer
        .create(<AddTask addTask={addTaskMock} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});