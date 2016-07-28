import { createStore } from 'redux'
import { IState, ITask, IStoreAction, ActionType } from '../model/TasksModel'

const defaultState: IState = {
    tasks: [
        {
            index: 0,
            text: 'React Components, Elements, and Instances',
            done: false
        },
        {
            index: 1,
            text: 'Implement redux',
            done: false
        },
        {
            index: 2,
            text: 'Complete pluralsight redux',
            done: true
        },
    ],
    canUndo: false
}

let stateHistory: Array<IState> = [defaultState]

function todoStore(state: IState = defaultState, action: IStoreAction) {
    switch (action.type) {

        case ActionType.ADD_TASK:
            {
                action.task.index = nextIndex();
                let newState = Object.assign({}, state, {
                    tasks: [...state.tasks, action.task],
                    canUndo: stateHistory.length + 1 > 1
                })
                pushStateHistory(newState)
                return newState;
            }

        case ActionType.EDIT_TASK:
            {
                const newTask = Object.assign({}, action.task, {
                    text: action.task.text
                })
                state.tasks[state.tasks.indexOf(action.task)] = newTask;
                const newState = Object.assign({}, state, {
                    tasks: [...state.tasks],
                    canUndo: stateHistory.length + 1 > 1
                })
                pushStateHistory(newState)
                return newState
            }

        case ActionType.REMOVE_TASK:
            {
                let newTasks = state.tasks.filter(task => task !== action.task)
                let newState = Object.assign({}, state, {
                    tasks: newTasks,
                    canUndo: stateHistory.length + 1 > 1
                })
                pushStateHistory(newState)
                return newState;
            }

        case ActionType.MARK_DONE:
            {
                const doneTask = Object.assign({}, action.task, {
                    done: true
                })
                const updatedTasks = state.tasks.map(task => task === action.task ? doneTask : task)
                const newState = Object.assign({}, state, {
                    tasks: updatedTasks,
                    canUndo: stateHistory.length + 1 > 1
                })

                pushStateHistory(newState)
                return newState;
            }

        case ActionType.MARK_NOT_DONE:
            {
                let doneTask = Object.assign({}, action.task, {
                    done: false
                })
                let updatedTasks = state.tasks.map(task => task === action.task ? doneTask : task)
                let newState = Object.assign({}, state, {
                    tasks: updatedTasks,
                    canUndo: stateHistory.length + 1 > 1
                })
                pushStateHistory(newState)
                return newState;
            }

        case ActionType.UNDO:
            {
                var lastState = popStateHistory(state)
                if (lastState) {
                    return lastState;
                }
                return state;
            }

        default:
            return state;
    }

    function nextIndex() {
        if (state.tasks.length === 0) {
            return 0;
        }

        let max = state.tasks.map(x => x.index).reduce((x, y) => y > x ? y : x)
        return max + 1;
    }

    function pushStateHistory(state: IState) {
        stateHistory.push(state)
    }
    function popStateHistory(state): IState {
        if (stateHistory.length > 1) {
            stateHistory.splice(-1, 1)
            return stateHistory.slice(-1)[0]
        }
        return state;
    }
}

const storeInstance = createStore(todoStore)
export { storeInstance as default, stateHistory }