"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_router_1 = require('react-router');
var TasksModel_1 = require('../model/TasksModel');
var Store_1 = require('../store/Store');
var TaskEdit = (function (_super) {
    __extends(TaskEdit, _super);
    function TaskEdit(props, contenxt) {
        var _this = this;
        _super.call(this, props, contenxt);
        this.onSave = function (e) {
            e.preventDefault();
            var refs = _this.refs;
            var task = {
                index: _this.props.task ? _this.props.task.index : 0,
                text: refs.text.value,
                done: false
            };
            var storeAction = {
                type: TasksModel_1.ActionType.ADD_TASK,
                task: task
            };
            Store_1.default.dispatch(storeAction);
            react_router_1.browserHistory.push('/');
        };
        this.onCancel = function (e) {
            e.preventDefault();
            react_router_1.browserHistory.push('/');
        };
    }
    TaskEdit.prototype.render = function () {
        return (React.createElement("div", {className: ""}, React.createElement("h3", null, "Add / Edit Task"), React.createElement("form", {onSubmit: this.onSave}, React.createElement("fieldset", {className: "form-group"}, React.createElement("label", {for: "task"}, "Task"), React.createElement("input", {type: "text", ref: "text", className: "form-control"})), React.createElement("div", {className: "btn-group"}, React.createElement("button", {className: "btn btn-primary"}, "Save"), React.createElement("button", {className: "btn btn-warning", onClick: this.onCancel}, "Cancel")))));
    };
    return TaskEdit;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskEdit;
//# sourceMappingURL=TaskEdit.js.map