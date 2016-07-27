//import React from 'react';
//export default React.createClass({
//  handleSubmit: function(e) {
//    e.preventDefault();
//    var author = this.refs.author.value.trim();
//    var text = this.refs.text.value.trim();
//    var book = this.refs.book.value.trim();
//    if (!text || !author || !book) {
//      return;
//    }
//    this.props.onCommentSubmit({author: author, text: text, book:book});
//    this.refs.author.value = '';
//    this.refs.text.value = '';
//    this.refs.book.value = '';
//    return;
//  },
//  render: function() {
//    return (
//      <form className="commentForm" onSubmit={this.handleSubmit}>
//        <input type="text" placeholder="Your name" ref="author" />
//        <input type="text" placeholder="Say something..." ref="text" />
//        <input type="text" placeholder="Say else..." ref="book" />
//        <input type="submit" value="Post" />
//      </form>
//    );
//  }
//});
//# sourceMappingURL=CommentFormOld.js.map