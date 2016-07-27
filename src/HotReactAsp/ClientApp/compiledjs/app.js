"use strict";
var CommentBox_1 = require('./modules/comment/CommentBox');
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(React.createElement(CommentBox_1.CommentBox, {url: "/api/comments", pollInterval: 2000}), document.getElementById('content'));
//# sourceMappingURL=app.js.map