# Redux for State Todo App

This exercise is for using React State for the state management in a todo application.

## Features

* [x] View all of the tasks
* [x] Create a new task
* [x] Edit a task text
* [x] Mark a task as complete
* [x] Unmark a task (now uncomplete)
* [x] Delete a task

## Resources

* [An example of using redux starter kit](https://github.com/nickmccurdy/redux-starter-kit/blob/example/example/src/index.js)

## Notes

I'm using [Redux Starter Kit](https://redux-starter-kit.js.org/) which was really nice to set up and get going. However I ran into a bug when creating the reducers.

The starter kit uses Immer.js in order to allow the state to appear to be mutated in the reducer, but this didn't work when using an `id` in the state object. I had to work around this bug by changing the `id` to a unique number so that redux would update the store and reload the render functions.