//import {CommentBox} from './modules/comment/CommentBox';
//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

//ReactDOM.render(
//    <CommentBox url="/api/comments" pollInterval={2000} />,
//    document.getElementById('content')
//);


//import * as React from 'react';
//import * as ReactDOM from 'react-dom';

//import Counter from './modules/counter/Counter';

//ReactDOM.render(
//    <Counter />,
//    document.getElementById("content"));

import "babel-polyfill";

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Routes from './modules/todo/Routes'

let { render } = ReactDOM;

console.log('Main.tsx 2')

let root = document.querySelector('#root')
render(Routes, root)