import * as React from 'react'
import {browserHistory} from 'react-router'
import {ITask, IState, IStoreAction, ActionType } from '../model/TasksModel'
import TaskRow from './TaskRow'
import store from '../store/Store'

let {
    Component
} = React;


class TaskList extends React.Component<{}, IState> {

    constructor() {
        super();
        this.state = store.getState()

        store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    onAddStarted = (e) => {
        e.preventDefault();
        browserHistory.push('/edit')
    }

    onUnDo(e) {
        const storeAction: IStoreAction = {
            type: ActionType.UNDO,
            task: null
        }
        store.dispatch(storeAction)
    }

    render() {
        let key = 0;
        const tasks = this.state.tasks.map(todo => {
            var row = <TaskRow key={key} index={key}  task={todo} />
            key++
            return row;
        })

        const undoStyle = this.state.canUndo ? { display: 'block' } : { display: 'none' }

        return (
            <div>
                <div className="row spacer-bottom">
                    <div className="col-xs-6">
                        <button
                            onClick={this.onAddStarted}
                            className="btn btn-primary">Add</button>
                    </div>
                    <div className="col-xs-6">
                        <div className="pull-xs-right">
                            <button
                                className="btn btn-danger"
                                title="Undo the last operation"
                                style={undoStyle}
                                onClick={this.onUnDo.bind(this) }>Undo</button>
                        </div>
                    </div>
                </div>
                <div className="list-group">
                    {tasks}
                </div>
            </div>
        )
    }
}

export default TaskList;