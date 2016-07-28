"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var TasksModel_1 = require('../model/TasksModel');
var TaskRow_1 = require('./TaskRow');
var Store_1 = require('../store/Store');
var Component = React.Component;
var TaskList = (function (_super) {
    __extends(TaskList, _super);
    function TaskList() {
        var _this = this;
        _super.call(this);
        this.onAddStarted = function (e) {
            e.preventDefault();
            react_router_1.browserHistory.push('/edit');
        };
        this.state = Store_1.default.getState();
        Store_1.default.subscribe(function () {
            _this.setState(Store_1.default.getState());
        });
    }
    TaskList.prototype.onUnDo = function (e) {
        var storeAction = {
            type: TasksModel_1.ActionType.UNDO,
            task: null
        };
        Store_1.default.dispatch(storeAction);
    };
    TaskList.prototype.render = function () {
        var key = 0;
        var tasks = this.state.tasks.map(function (todo) {
            var row = React.createElement(TaskRow_1.default, {key: key, index: key, task: todo});
            key++;
            return row;
        });
        var undoStyle = this.state.canUndo ? { display: 'block' } : { display: 'none' };
        return (React.createElement("div", null, React.createElement("div", {className: "row spacer-bottom"}, React.createElement("div", {className: "col-xs-6"}, React.createElement("button", {onClick: this.onAddStarted, className: "btn btn-primary"}, "Add")), React.createElement("div", {className: "col-xs-6"}, React.createElement("div", {className: "pull-xs-right"}, React.createElement("button", {className: "btn btn-danger", title: "Undo the last operation", style: undoStyle, onClick: this.onUnDo.bind(this)}, "Undo")))), React.createElement("div", {className: "list-group"}, tasks)));
    };
    return TaskList;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskList;
//# sourceMappingURL=TaskList.js.map