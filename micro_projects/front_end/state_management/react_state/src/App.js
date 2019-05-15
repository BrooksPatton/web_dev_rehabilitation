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
    const task = this.findTaskById(editedTask.id);

    task.name = editedTask.name;
    this.setState({ tasks: this.state.tasks });
  }

  toggleTaskCompletedStatus = taskId => {
    const task = this.findTaskById(taskId);

    task.completed = !task.completed;
    this.setState({ tasks: this.state.tasks });
  }

  findTaskById = taskId => this.state.tasks.find(task => task.id === taskId)

  removeTaskById = taskId => {
    const taskIndex = this.state.tasks.findIndex(task => task.id === taskId);
    const { tasks } = this.state;

    tasks.splice(taskIndex, 1);
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="App">
        <h1>React State Todo App</h1>
        <AllTasks tasks={this.state.tasks} editTaskName={this.editTaskName} toggleTaskCompletedStatus={this.toggleTaskCompletedStatus} removeTaskById={this.removeTaskById} />
        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
