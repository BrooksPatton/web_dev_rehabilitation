import React from 'react';
import Tasks from './tasks/Tasks';

function App() {
  const tasks = [
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
  ];

  return (
    <div className="App">
      <h1>React State Todo App</h1>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
