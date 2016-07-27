import * as React from 'react';



interface ICommentFormState {
    value: string;
}

interface ICommentFormProps extends React.Props<CommentForm> {
    onCommentSubmit: (value: IComment) => void;
}

class CommentForm extends React.Component<ICommentFormProps, ICommentFormState> {
    
    ctrls: {
        author?: HTMLInputElement;
        text?: HTMLInputElement;
        book?: HTMLInputElement;
    } = {};
    handleSubmit = (e) => {
        e.preventDefault();
        var author = this.ctrls.author.value.trim();
        var text = this.ctrls.text.value.trim();
        var book = this.ctrls.book.value.trim();
        if (!text || !author || !book) {
            return;
        }
        this.props.onCommentSubmit({ id:0,author: author, text: text, book: book });
        this.ctrls.author.value = '';
        this.ctrls.text.value = '';
        this.ctrls.book.value = '';
        return;
    }
    render () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref={(author) => this.ctrls.author = author} />
                <input type="text" placeholder="Book Names" ref={(book) => this.ctrls.book = book} />
                <input type="text" placeholder="Some Text..." ref={(text) => this.ctrls.text = text} />
                <input type="submit" value="Post" />
            </form>
        );
    }
}
export { CommentForm };
