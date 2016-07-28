import * as React from 'react'
import { browserHistory } from 'react-router'
import {ITask, IStoreAction, ActionType} from '../model/TasksModel'

import store from '../store/Store'

interface TaskEditProp {
    task: ITask
}

class TaskEdit extends React.Component<TaskEditProp, {}>{
    constructor(props, contenxt) {
        super(props, contenxt);
    }

    onSave = (e) => {
        e.preventDefault();
        var refs: any = this.refs;
        var task: ITask = {
            index: this.props.task ? this.props.task.index : 0,
            text: refs.text.value,
            done: false
        }

        var storeAction: IStoreAction = {
            type: ActionType.ADD_TASK,
            task
        }

        store.dispatch(storeAction)
        browserHistory.push('/')
    }

    onCancel = (e) => {
        e.preventDefault();
        browserHistory.push('/')
    }

    render() {

        return (
            <div className="">
                <h3>Add / Edit Task</h3>
                <form onSubmit={this.onSave}>
                    <fieldset className="form-group">
                        <label for="task">Task</label>
                        <input type="text" ref="text" className="form-control" />
                    </fieldset>
                    <div className="btn-group">
                        <button className="btn btn-primary" >Save</button>
                        <button className="btn btn-warning" onClick={this.onCancel} >Cancel</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default TaskEdit;