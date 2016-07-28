"use strict";
var redux_1 = require('redux');
var TasksModel_1 = require('../model/TasksModel');
var defaultState = {
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
};
var stateHistory = [defaultState];
exports.stateHistory = stateHistory;
function todoStore(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case TasksModel_1.ActionType.ADD_TASK:
            {
                action.task.index = nextIndex();
                var newState = Object.assign({}, state, {
                    tasks: state.tasks.concat([action.task]),
                    canUndo: stateHistory.length + 1 > 1
                });
                pushStateHistory(newState);
                return newState;
            }
        case TasksModel_1.ActionType.EDIT_TASK:
            {
                var newTask = Object.assign({}, action.task, {
                    text: action.task.text
                });
                state.tasks[state.tasks.indexOf(action.task)] = newTask;
                var newState = Object.assign({}, state, {
                    tasks: state.tasks.slice(),
                    canUndo: stateHistory.length + 1 > 1
                });
                pushStateHistory(newState);
                return newState;
            }
        case TasksModel_1.ActionType.REMOVE_TASK:
            {
                var newTasks = state.tasks.filter(function (task) { return task !== action.task; });
                var newState = Object.assign({}, state, {
                    tasks: newTasks,
                    canUndo: stateHistory.length + 1 > 1
                });
                pushStateHistory(newState);
                return newState;
            }
        case TasksModel_1.ActionType.MARK_DONE:
            {
                var doneTask_1 = Object.assign({}, action.task, {
                    done: true
                });
                var updatedTasks = state.tasks.map(function (task) { return task === action.task ? doneTask_1 : task; });
                var newState = Object.assign({}, state, {
                    tasks: updatedTasks,
                    canUndo: stateHistory.length + 1 > 1
                });
                pushStateHistory(newState);
                return newState;
            }
        case TasksModel_1.ActionType.MARK_NOT_DONE:
            {
                var doneTask_2 = Object.assign({}, action.task, {
                    done: false
                });
                var updatedTasks = state.tasks.map(function (task) { return task === action.task ? doneTask_2 : task; });
                var newState = Object.assign({}, state, {
                    tasks: updatedTasks,
                    canUndo: stateHistory.length + 1 > 1
                });
                pushStateHistory(newState);
                return newState;
            }
        case TasksModel_1.ActionType.UNDO:
            {
                var lastState = popStateHistory(state);
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
        var max = state.tasks.map(function (x) { return x.index; }).reduce(function (x, y) { return y > x ? y : x; });
        return max + 1;
    }
    function pushStateHistory(state) {
        stateHistory.push(state);
    }
    function popStateHistory(state) {
        if (stateHistory.length > 1) {
            stateHistory.splice(-1, 1);
            return stateHistory.slice(-1)[0];
        }
        return state;
    }
}
var storeInstance = redux_1.createStore(todoStore);
exports.default = storeInstance;
//# sourceMappingURL=Store.js.map