import {CommentBox} from './modules/comment/CommentBox';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);
