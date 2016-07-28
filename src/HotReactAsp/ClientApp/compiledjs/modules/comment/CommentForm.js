"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm() {
        var _this = this;
        _super.apply(this, arguments);
        this.ctrls = {};
        this.handleSubmit = function (e) {
            e.preventDefault();
            var author = _this.ctrls.author.value.trim();
            var text = _this.ctrls.text.value.trim();
            var book = _this.ctrls.book.value.trim();
            if (!text || !author || !book) {
                return;
            }
            _this.props.onCommentSubmit({ id: 0, author: author, text: text, book: book });
            _this.ctrls.author.value = '';
            _this.ctrls.text.value = '';
            _this.ctrls.book.value = '';
            return;
        };
    }
    CommentForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, React.createElement("input", {type: "text", placeholder: "Your name", ref: function (author) { return _this.ctrls.author = author; }}), React.createElement("input", {type: "text", placeholder: "Book Names", ref: function (book) { return _this.ctrls.book = book; }}), React.createElement("input", {type: "text", placeholder: "Some Text...", ref: function (text) { return _this.ctrls.text = text; }}), React.createElement("input", {type: "submit", value: "Post"})));
    };
    return CommentForm;
}(React.Component));
exports.CommentForm = CommentForm;
//# sourceMappingURL=CommentForm.js.map