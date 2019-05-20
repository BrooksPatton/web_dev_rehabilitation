import { createReducer, createAction } from "redux-starter-kit";

const initialTodoState = {
    tasks: [
        {
            id: 1,
            name: 'Task name',
            completed: false,
            editedName: 'Task name',
            editing: false
        },
        {
            id: 2,
            name: 'Grocery shopping',
            completed: false,
            editedName: 'Grocery shopping',
            editing: false
        },
        {
            id: 3,
            name: 'Stream on Twitch',
            completed: false,
            editedName: 'Stream on Twitch',
            editing: false
        }
    ],
    lastIdToAdd: 3
};

export const addTask = createAction('addTask');
export const editTaskName = createAction('editTaskName');
export const toggleTaskCompletion = createAction('toggleTaskCompletion');
export const deleteTask = createAction('deleteTask');
export const updateEditedTaskName = createAction('updateEditedTaskName');
export const toggleEditedStatus = createAction('toggleEditedStatus');
export const saveEditedTaskName = createAction('saveEditedTaskName');

export const todoReducer = createReducer(initialTodoState, {
    [addTask]: addTaskReducer,
    [editTaskName]: editTaskNameReducer,
    [toggleTaskCompletion]: toggleTaskCompletionReducer,
    [deleteTask]: deleteTaskReducer,
    [updateEditedTaskName]: updateEditedTaskNameReducer,
    [toggleEditedStatus]: toggleEditedStatusReducer,
    [saveEditedTaskName]: saveEditedTaskNameReducer
});

function editTaskNameReducer(state, action) {
    const task = state.tasks.find(task => task.id === action.payload.id);

    task.name = action.payload.name;
}

function addTaskReducer(state, action) {
    state.tasks.push({
        id: state.lastIdToAdd + 1,
        name: action.payload,
        completed: false,
        editedName: action.payload,
        editing: false
    });

    state.lastIdToAdd += 1;
}

function toggleTaskCompletionReducer(state, action) {
    const task = state.tasks.find(task => task.id === action.payload);

    task.completed = !task.completed;
}

function deleteTaskReducer(state, action) {
    const taskIndex = state.tasks.findIndex(task => task.id === action.payload);

    state.tasks.splice(taskIndex, 1);
}

function saveEditedTaskNameReducer(state, action) {
    const task = state.tasks.find(stateTask => stateTask.id === action.payload);

    task.name = task.editedName;
    task.editing = false;
}

function toggleEditedStatusReducer(state, action) {
    const task = state.tasks.find(stateTask => stateTask.id === action.payload);

    task.editing = !task.editing;
    task.editedName = task.name;
}

function updateEditedTaskNameReducer(state, action) {
    const task = state.tasks.find(stateTask => stateTask.id === action.payload.id);

    task.editedName = action.payload.editedName;
}

export default todoReducer;