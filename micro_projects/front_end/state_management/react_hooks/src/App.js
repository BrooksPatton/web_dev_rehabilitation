import React, { useState } from 'react';
import { cloneDeep } from 'lodash';
import AllTasks from './AllTasks/AllTasks';
import AddTask from './AddTask/AddTask';

function App(properties) {
  const initialTodoState = [
    {
      id: 1,
      name: 'Task name',
      completed: false
    },
    {
      id: 2,
      name: 'Grocery shopping',
      completed: true
    },
    {
      id: 3,
      name: 'Stream on Twitch',
      completed: false
    }
  ];

  const [tasks, setTasks] = useState(initialTodoState);
  const [lastIdToAdd, setLastIdToAdd] = useState(3);

  const addTask = taskName => {
    const newTask = {
      id: lastIdToAdd + 1,
      name: taskName,
      completed: false
    };

    tasks.push(newTask);
    setTasks(tasks);
    setLastIdToAdd(lastIdToAdd + 1);
  }

  const editTaskName = editedTask => {
    const tasksDeepClone = cloneDeep(tasks);
    const task = tasksDeepClone.find(task => task.id === editedTask.id);

    task.name = editedTask.name;
    setTasks(tasksDeepClone);
  }

  const toggleTaskCompletedStatus = taskId => {
    const tasksDeepClone = cloneDeep(tasks);
    const task = tasksDeepClone.find(task => task.id === taskId);

    task.completed = !task.completed;
    setTasks(tasksDeepClone);

  }

  const removeTaskById = taskId => {
    const tasksDeepClone = cloneDeep(tasks);
    const taskIndex = tasksDeepClone.findIndex(task => task.id === taskId);

    tasksDeepClone.splice(taskIndex, 1);
    setTasks(tasksDeepClone);
  }

  return (
    <div className="App">
      <h1>React State Todo App</h1>
      <AllTasks tasks={tasks} editTaskName={editTaskName} toggleTaskCompletedStatus={toggleTaskCompletedStatus} removeTaskById={removeTaskById} />
      <AddTask addTask={addTask} />
    </div>
  );
}

export default App;
