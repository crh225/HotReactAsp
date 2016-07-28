"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Store_1 = require('../store/Store');
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks(props, context) {
        var _this = this;
        _super.call(this, props, context);
        this.state = Store_1.default.getState();
        Store_1.default.subscribe(function () {
            _this.setState(Store_1.default.getState());
        });
    }
    Tasks.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement("div", null, React.createElement("div", {className: "row page-heading"}, React.createElement("div", {className: "col-xs-12"}, React.createElement("h2", null, "Tasks"))), children));
    };
    return Tasks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
//# sourceMappingURL=Tasks.js.map