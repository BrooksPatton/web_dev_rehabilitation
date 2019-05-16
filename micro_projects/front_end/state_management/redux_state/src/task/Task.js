import React from 'react';
import './Task.css';

class Task extends React.Component {
    constructor(properties) {
        super(properties);

        this.state = {
            task: this.props.task,
            editing: false,
            editedTask: this.props.task.name
        };
    }

    renderEditing = () => (
        <form onSubmit={this.handleSaveChangeToTask}>
            <label htmlFor={`Task-edit-${this.state.task.id}`}></label>
            <input type="text" value={this.state.editedTask} id={`Task-edit-${this.state.task.id}`} onChange={this.handleEditTaskChange}></input>
        </form>
    )

    handleEditTaskChange = event => this.setState({ editedTask: event.target.value })

    renderEditButton = () => (
        <button className="Task-edit" onClick={() => this.setState({ editing: true })}>Edit</button>
    )

    renderSaveButton = () => (
        <button className="Task-edit" onClick={this.handleSaveChangeToTask}>Save</button>
    )

    handleSaveChangeToTask = event => {
        event.preventDefault();

        console.log('handled');


        const { id } = this.state.task;

        this.props.editTaskName({ id, name: this.state.editedTask });
        this.setState({ editing: false })
    }

    renderCancelEditButton = () => (
        <button className="Task-edit" onClick={this.cancelEdit}>Cancel</button>
    )

    cancelEdit = () => {
        this.setState({
            editing: false,
            editedTask: this.state.task.name
        });
    }

    toggleCompletedStatus = () => this.props.toggleTaskCompletedStatus(this.state.task.id)

    renderTaskName = () => (
        <span className={this.state.task.completed ? 'Task-completed' : null}>{this.state.task.name}</span>
    )

    removeTask = () => this.props.removeTaskById(this.state.task.id);

    render() {
        return (
            <section className="Task">
                <div className="Task-name">
                    <label htmlFor={`${this.state.task.id}-task`}></label>
                    <input type="checkbox" id={`${this.state.task.id}-task`} onChange={this.toggleCompletedStatus} checked={this.state.task.completed}></input>
                    {this.state.editing ? this.renderEditing() : this.renderTaskName()}
                </div>
                <div>
                    {this.state.editing ? this.renderSaveButton() : this.renderEditButton()}
                    {this.state.editing ? this.renderCancelEditButton() : null}
                    <button className="Task-delete" onClick={this.removeTask}>X</button>
                </div>
            </section>
        )
    }
}

export default Task;