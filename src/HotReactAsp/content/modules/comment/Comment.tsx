import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as marked from 'marked';


interface ICommentState {
    value: string;
}

interface ICommentProps extends React.Props<Comment> {
    author: string;
    book: string;
}

class Comment extends React.Component<ICommentProps, ICommentState> {



    rawMarkup =  () => {
        var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
        return { __html: rawMarkup };
    }
    render () {
        return (
            <div className="comment">
                <h2 className="comment-author">
                    Author name: {this.props.author}
                </h2>
                <div className="comment-text">
                    Book name: {this.props.book}
                </div>
                <div className="comment-book">
                    text:<span dangerouslySetInnerHTML={this.rawMarkup() } />
                </div>
            </div>
        );
    }
}
export { Comment };
