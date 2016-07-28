"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var TasksModel_1 = require('../model/TasksModel');
var Store_1 = require('../store/Store');
var TaskRow = (function (_super) {
    __extends(TaskRow, _super);
    function TaskRow(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.onRemove = function (e) {
            e.preventDefault();
            var task = _this.props.task;
            var storeAction = {
                type: TasksModel_1.ActionType.REMOVE_TASK,
                task: task,
            };
            Store_1.default.dispatch(storeAction);
        };
        this.onDone = function (e) {
            e.preventDefault();
            var task = _this.props.task;
            var storeAction = {
                type: TasksModel_1.ActionType.MARK_DONE,
                task: task
            };
            Store_1.default.dispatch(storeAction);
        };
        this.onNotDone = function (e) {
            e.preventDefault();
            var task = _this.props.task;
            var storeAction = {
                type: TasksModel_1.ActionType.MARK_NOT_DONE,
                task: task
            };
            Store_1.default.dispatch(storeAction);
        };
    }
    TaskRow.prototype.render = function () {
        var task = this.props.task;
        var cssStyle = this.props.task.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
        var styleShow = {};
        var styleHide = { display: 'none' };
        return (React.createElement("div", {className: "list-group-item"}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-xs-8", style: cssStyle}, task.text), React.createElement("div", {className: "col-xs-4"}, React.createElement("div", {className: "pull-xs-right"}, React.createElement("div", {className: "btn-group"}, React.createElement("button", {style: !task.done ? styleShow : styleHide, onClick: this.onDone.bind(this), className: "btn btn-success btn-sm"}, "Mark done"), React.createElement("button", {style: task.done ? styleShow : styleHide, onClick: this.onNotDone.bind(this), className: "btn btn-warning btn-sm"}, "Not done"), React.createElement("button", {onClick: this.onRemove.bind(this), className: "btn btn-danger btn-sm"}, "Remove")))))));
    };
    return TaskRow;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskRow;
//# sourceMappingURL=TaskRow.js.map