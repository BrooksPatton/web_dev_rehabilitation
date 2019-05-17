import React from 'react';
import AllTasks from './AllTasks/AllTasks';
import AddTask from './AddTask/AddTask';

function App(properties) {
  return (
    <div className="App">
      <h1>React Redux Todo App</h1>
      <AllTasks />
      <AddTask />
    </div>
  );
}

export default App;
