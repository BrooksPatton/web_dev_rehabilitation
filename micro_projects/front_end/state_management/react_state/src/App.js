import React from 'react';
import AllTasks from './AllTasks/AllTasks';
import AddTask from './AddTask/AddTask';

class App extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      tasks: [
        {
          id: 1,
          name: 'Task name'
        },
        {
          id: 2,
          name: 'Grocery shopping'
        },
        {
          id: 3,
          name: 'Stream on Twitch'
        }
      ],
      lastIdToAdd: 3
    }
  }

  addTask = taskName => {
    const { tasks, lastIdToAdd } = this.state;
    const newTask = {
      id: lastIdToAdd + 1,
      name: taskName
    };

    tasks.push(newTask);
    this.setState({ tasks, lastIdToAdd: lastIdToAdd + 1 });
  }

  editTaskName = editedTask => {
    const task = this.state.tasks.find(task => task.id === editedTask.id);

    task.name = editedTask.name;
    this.setState({ tasks: this.state.tasks });
  }

  render() {
    return (
      <div className="App">
        <h1>React State Todo App</h1>
        <AllTasks tasks={this.state.tasks} editTaskName={this.editTaskName} />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
