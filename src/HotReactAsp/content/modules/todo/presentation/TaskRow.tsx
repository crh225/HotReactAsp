import * as React from 'react'
import {browserHistory} from 'react-router'
import {ITask, IStoreAction, ActionType} from '../model/TasksModel'
import store from '../store/Store'


interface TaskProp {
    index: number,
    task: ITask
}

class TaskRow extends React.Component<TaskProp, {}>{

    constructor(props, context) {
        super(props, context);
    }

    onRemove = (e) => {
        e.preventDefault();

        const { task } = this.props

        let storeAction: IStoreAction = {
            type: ActionType.REMOVE_TASK,
            task,
        }
        store.dispatch(storeAction)
    }

    onEdit = (e) => {
        //TODO: doesnt work just yet
        e.preventDefault();
        const { task } = this.props
        var storeAction: IStoreAction = {
           type: ActionType.EDIT_TASK,
           task
        }
        store.dispatch(storeAction)


    }

    onDone = (e) => {
        e.preventDefault()

        const { task } = this.props

        let storeAction: IStoreAction = {
            type: ActionType.MARK_DONE,
            task
        }
        store.dispatch(storeAction)
    }

    onNotDone = (e) => {
        e.preventDefault()

        const { task } = this.props
        let storeAction: IStoreAction = {
            type: ActionType.MARK_NOT_DONE,
            task
        }
        store.dispatch(storeAction)
    }
    render() {

        const { task } = this.props
        let cssStyle = this.props.task.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }

        let styleShow = {}
        let styleHide = { display: 'none' }

        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xs-8" style={cssStyle}>
                        {task.text}
                    </div>
                    <div className="col-xs-4">
                        <div className="pull-xs-right">
                            <div className="btn-group">
                                <button
                                    style={ !task.done ? styleShow : styleHide }
                                    onClick={this.onDone.bind(this) }
                                    className="btn btn-success btn-sm">Mark done</button>
                                <button
                                    style={ task.done ? styleShow : styleHide}
                                    onClick={this.onNotDone.bind(this) }
                                    className="btn btn-warning btn-sm">Not done</button>
                                <button
                                    onClick={this.onEdit.bind(this) }
                                    className="btn btn-info btn-sm">Edit</button>
                                <button
                                    onClick={this.onRemove.bind(this) }
                                    className="btn btn-danger btn-sm">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskRow;