import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Comment} from './Comment';

interface ICommentListState {
    value: string;
}

interface ICommentListProps extends React.Props<Comment> {
    data: Array<IComment>;
}

class CommentList extends React.Component<ICommentListProps, ICommentListState> {

    render () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id} book={comment.book}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
export { CommentList };
