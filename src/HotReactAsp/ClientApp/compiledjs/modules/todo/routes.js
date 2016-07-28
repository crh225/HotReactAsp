"use strict";
var React = require('react');
var react_router_1 = require('react-router');
var Tasks_1 = require('./container/Tasks');
var TaskList_1 = require('./presentation/TaskList');
var TaskEdit_1 = require('./presentation/TaskEdit');
var Routes = (React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: Tasks_1.default}, React.createElement(react_router_1.IndexRoute, {component: TaskList_1.default}), React.createElement(react_router_1.Route, {path: "/edit", component: TaskEdit_1.default}))));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
//# sourceMappingURL=Routes.js.map