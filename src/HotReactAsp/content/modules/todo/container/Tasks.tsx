import * as React from 'react'
import TaskList from '../presentation/TaskList'
import {ITask, IStoreAction, ActionType} from '../model/TasksModel'
import store, { stateHistory } from '../store/Store'
import { browserHistory } from 'react-router'

interface TasksState {
    tasks: Array<ITask>
    canUndo: boolean
}

class Tasks extends React.Component<{}, TasksState>{
    constructor(props, context) {
        super(props, context)

        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }



    render() {
        const { children } = this.props

        return (
            <div >
                <div className="row page-heading">
                    <div className="col-xs-12">
                        <h2>Todo Tasks</h2>
                    </div>
                </div>
                { children }
            </div>
        )
    }
}

export default Tasks