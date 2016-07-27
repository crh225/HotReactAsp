import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as marked from 'marked';
import * as es6promise from 'es6-promise';
import * as fetch from 'isomorphic-fetch';
import './CommentBox.less';
import * as jquery from 'jquery';
import {CommentList} from './CommentList';
import {CommentForm} from './CommentForm';

interface ICommentBoxState {
    value: number;
    data: Array<IComment>;
}

interface ITodoCommentBoxProps extends React.Props<CommentBox> {
    url: string;
    pollInterval: number;
}

class CommentBox extends React.Component<ITodoCommentBoxProps, ICommentBoxState> {


    constructor(props: ITodoCommentBoxProps) {
        super(props);
        this.state = {
            data: [],
            value: null
        };
    }

    loadCommentsFromServer = () => {
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
        fetch(this.props.url)
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
                this.setState({ data: data, value: this.state.value +1 });              
            }.bind(this));
    }
    handleCommentSubmit =  (comment) => {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments, value: this.state.value });
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function (data) {
                this.setState({ data: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

        componentDidMount = () => {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
    render () {
        return (
            <div className="commentBox">
                <h1>Comments <span>(Successful server get requests: {this.state.value}) </span>
                </h1>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                <br />
                <CommentList data={this.state.data} />
                
            </div>
        );
    }
}
export { CommentBox };
