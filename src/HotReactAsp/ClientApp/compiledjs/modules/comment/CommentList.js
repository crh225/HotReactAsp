"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Comment_1 = require('./Comment');
var CommentList = (function (_super) {
    __extends(CommentList, _super);
    function CommentList() {
        _super.apply(this, arguments);
    }
    CommentList.prototype.render = function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (React.createElement(Comment_1.Comment, {author: comment.author, key: comment.id}, comment.text, " ", comment.book));
        });
        return (React.createElement("div", {className: "commentList"}, commentNodes));
    };
    return CommentList;
}(React.Component));
exports.CommentList = CommentList;
//# sourceMappingURL=CommentList.js.map