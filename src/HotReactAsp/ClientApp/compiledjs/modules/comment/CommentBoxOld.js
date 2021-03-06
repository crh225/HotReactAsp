//import './CommentBox.less';
//import $ from 'jquery';
//import React from 'react';
//import ReactDOM from 'react-dom';
//import CommentList from './CommentList';
//import CommentForm from './CommentForm';
//export default React.createClass({
//  loadCommentsFromServer: function() {
//    $.ajax({
//      url: this.props.url,
//      dataType: 'json',
//      cache: false,
//      success: function(data) {
//        this.setState({data: data, value: this.state.value - 12});
//      }.bind(this),
//      error: function(xhr, status, err) {
//        console.error(this.props.url, status, err.toString());
//      }.bind(this)
//    });
//  },
//  handleCommentSubmit: function(comment) {
//      var comments = this.state.data;
//      var newComments = comments.concat([comment]);
//      this.setState({data: newComments});
//      $.ajax({
//        url: this.props.url,
//        dataType: 'json',
//        type: 'POST',
//        data: comment,
//        success: function(data) {
//          this.setState({data: data});
//        }.bind(this),
//        error: function(xhr, status, err) {
//          console.error(this.props.url, status, err.toString());
//        }.bind(this)
//      });
//  },
//  getInitialState: function() {
//    return {data: [], value: 0};
//  },
//  componentDidMount: function() {
//    this.loadCommentsFromServer();
//    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
//  },
//  render: function() {
//    return (
//      <div className="commentBox">
//        <h1>Comments <span>(Successful server get requests: {this.state.value})</span>
//</h1>
//        <CommentList data={this.state.data} />
//        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
//      </div>
//    );
//  }
//});
//# sourceMappingURL=CommentBoxOld.js.map