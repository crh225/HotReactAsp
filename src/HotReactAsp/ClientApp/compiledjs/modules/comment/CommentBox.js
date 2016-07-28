"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var fetch = require('isomorphic-fetch');
require('./CommentBox.less');
var CommentList_1 = require('./CommentList');
var CommentForm_1 = require('./CommentForm');
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox(props) {
        var _this = this;
        _super.call(this, props);
        this.loadCommentsFromServer = function () {
            //$.ajax({
            //    url: this.props.url,
            //    dataType: 'json',
            //    cache: false,
            //    success: function (data) {
            //        this.setState({ data: data, value: this.state.value - 12 });
            //    }.bind(this),
            //    error: function (xhr, status, err) {
            //        console.error(this.props.url, status, err.toString());
            //    }.bind(this)
            //});
            fetch(_this.props.url)
                .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                else {
                    return response.json();
                }
            })
                .then(function (data) {
                //console.log(data);
                this.setState({ data: data, value: this.state.value + 1 });
            }.bind(_this));
        };
        this.handleCommentSubmit = function (comment) {
            var comments = _this.state.data;
            var newComments = comments.concat([comment]);
            _this.setState({ data: newComments, value: _this.state.value });
            $.ajax({
                url: _this.props.url,
                dataType: 'json',
                type: 'POST',
                data: comment,
                success: function (data) {
                    this.setState({ data: data });
                }.bind(_this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(_this)
            });
        };
        this.componentDidMount = function () {
            _this.loadCommentsFromServer();
            setInterval(_this.loadCommentsFromServer, _this.props.pollInterval);
        };
        this.state = {
            data: [],
            value: null
        };
    }
    CommentBox.prototype.render = function () {
        return (React.createElement("div", {className: "commentBox"}, React.createElement("h1", null, "Comments ", React.createElement("span", null, "(Successful server get requests: ", this.state.value, ") ")), React.createElement(CommentForm_1.CommentForm, {onCommentSubmit: this.handleCommentSubmit}), React.createElement("br", null), React.createElement(CommentList_1.CommentList, {data: this.state.data})));
    };
    return CommentBox;
}(React.Component));
exports.CommentBox = CommentBox;
//# sourceMappingURL=CommentBox.js.map