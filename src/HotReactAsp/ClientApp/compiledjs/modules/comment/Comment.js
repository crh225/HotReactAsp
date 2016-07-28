"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var marked = require('marked');
var Comment = (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        var _this = this;
        _super.apply(this, arguments);
        this.rawMarkup = function () {
            var rawMarkup = marked(_this.props.children.toString(), { sanitize: true });
            return { __html: rawMarkup };
        };
    }
    Comment.prototype.render = function () {
        return (React.createElement("div", {className: "comment"}, React.createElement("h2", {className: "comment-author"}, "Author name: ", this.props.author), React.createElement("div", {className: "comment-text"}, "Book name: ", this.props.book), React.createElement("div", {className: "comment-book"}, "text:", React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()}))));
    };
    return Comment;
}(React.Component));
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map