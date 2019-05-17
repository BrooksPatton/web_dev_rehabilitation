import { createReducer, createAction } from "redux-starter-kit";
import { cloneDeep } from 'lodash';

const initialTodoState = {
    tasks: [
        {
            id: 1,
            name: 'Task name',
            completed: false
        },
        {
            id: 2,
            name: 'Grocery shopping',
            completed: false
        },
        {
            id: 3,
            name: 'Stream on Twitch',
            completed: false
        }
    ],
    lastIdToAdd: 3
};

export const addTask = createAction('addTask');
export const editTaskName = createAction('editTaskName');
export const toggleTaskCompletion = createAction('toggleTaskCompletion');
export const deleteTask = createAction('deleteTask');

export const todoReducer = createReducer(initialTodoState, {
    [addTask]: addTaskReducer,
    [editTaskName]: editTaskNameReducer,
    [toggleTaskCompletion]: toggleTaskCompletionReducer,
    [deleteTask]: deleteTaskReducer
});

function editTaskNameReducer(state, action) {
    const task = state.tasks.find(task => task.id === action.payload.id);

    task.id = state.lastIdToAdd + 1;
    task.name = action.payload.name;
    state.lastIdToAdd += 1;
}

function addTaskReducer(state, action) {
    state.push({
        id: state.lastIdToAdd + 1,
        name: action.payload,
        completed: false
    });

    state.lastIdToAdd += 1;
}

function toggleTaskCompletionReducer(state, action) {
    const task = state.tasks.find(task => task.id === action.payload);

    task.id = state.lastIdToAdd + 1;
    task.completed = !task.completed;
    state.lastIdToAdd += 1;
}

function deleteTaskReducer(state, action) {
    const taskIndex = state.tasks.findIndex(task => task.id === action.payload);

    state.tasks.splice(taskIndex, 1);
}

export default todoReducer;