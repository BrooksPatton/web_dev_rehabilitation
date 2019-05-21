import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup, waitForDomChange } from 'react-testing-library';

import Task from './Task';

afterEach(cleanup);

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

it('should mark the task completed when the checkbox is clicked', () => {
    const task = {
        id: 1,
        name: 'task that is not completed',
        completed: false
    };

    const editTaskName = jest.fn(() => { });
    const toggleTaskCompletedStatus = jest.fn(id => id);
    const removeTaskById = jest.fn(() => { });

    const { getByTestId } = render(<Task task={task} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus} removeTaskById={removeTaskById} />);
    const checkbox = getByTestId('Task-checkbox');

    fireEvent.click(checkbox);

    expect(toggleTaskCompletedStatus.mock.calls.length).toBe(1);
    expect(toggleTaskCompletedStatus.mock.results[0].value).toBe(1);
});

it('should render the edit input field when edit button is clicked', () => {
    const task = {
        id: 1,
        name: 'task that is being edited',
        completed: false
    };

    const editTaskName = jest.fn(() => { });
    const toggleTaskCompletedStatus = jest.fn(() => { });
    const removeTaskById = jest.fn(() => { });

    const { getByTestId } = render(<Task task={task} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus} removeTaskById={removeTaskById} />);
    const editButton = getByTestId('Task-edit-button');
    const section = getByTestId('Task');

    fireEvent.click(editButton);
    expect(section).toMatchSnapshot();
});

it('should save changes to the edited task name', () => {
    const task = {
        id: 1,
        name: 'task that is being edited',
        completed: false
    };

    const editTaskName = jest.fn(updatedTask => updatedTask);
    const toggleTaskCompletedStatus = jest.fn(() => { });
    const removeTaskById = jest.fn(() => { });

    const { getByTestId } = render(<Task task={task} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus} removeTaskById={removeTaskById} />);
    const editButton = getByTestId('Task-edit-button');

    fireEvent.click(editButton);

    const input = getByTestId('Task-edit-input');

    fireEvent.change(input, { target: { value: 'new task name' } });
    fireEvent.submit(input);

    expect(editTaskName.mock.results[0].value.id).toBe(1);
    expect(editTaskName.mock.results[0].value.name).toBe('new task name');
});

it('should cancel changes to the edited task name', () => {
    const task = {
        id: 1,
        name: 'task name',
        completed: false
    };

    const editTaskName = jest.fn(() => { });
    const toggleTaskCompletedStatus = jest.fn(() => { });
    const removeTaskById = jest.fn(() => { });

    const { getByTestId } = render(<Task task={task} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus} removeTaskById={removeTaskById} />);
    const editButton = getByTestId('Task-edit-button');
    const section = getByTestId('Task');

    fireEvent.click(editButton);

    let input = getByTestId('Task-edit-input');
    const cancel = getByTestId('Task-cancel');

    fireEvent.change(input, { target: { value: 'edited task name' } });

    fireEvent.click(cancel);

    expect(section).toMatchSnapshot();

    fireEvent.click(editButton);

    input = getByTestId('Task-edit-input');

    expect(input.value).toBe('task name');
    expect(editTaskName.mock.calls.length).toBe(0);
});