import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import AddTask from './AddTask';

afterEach(cleanup);

it('should render correctly', () => {
    const addTaskMock = () => { };

    const tree = renderer
        .create(<AddTask addTask={addTaskMock} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('should add a task', () => {
    const addTaskMock = name => expect(name).toBe('a new task name');
    const { getByTestId } = render(<AddTask addTask={addTaskMock} />);
    const input = getByTestId('AddTask');

    fireEvent.change(input, { target: { value: 'a new task name' } });
    fireEvent.submit(input);
});