import React from 'react';

class AddTask extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            taskToAdd: ''
        };
    }

    handleAddTask = event => {
        event.preventDefault();

        this.props.addTask(this.state.taskToAdd);
        this.setState({ taskToAdd: '' });
    }

    handleAddTaskChange = event => {
        this.setState({ taskToAdd: event.target.value });
    }

    render() {
        return (
            <section className="AddTask">
                <form onSubmit={this.handleAddTask}>
                    <label>
                        <h1>Add Task</h1>
                        <input type="text" value={this.state.taskToAdd} onChange={this.handleAddTaskChange} />

                    </label>
                    <button>Add</button>
                </form>
            </section>
        )
    };
}

export default AddTask;