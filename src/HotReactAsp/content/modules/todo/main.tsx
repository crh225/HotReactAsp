import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './main.scss'
import Routes from './routes'

let { render } = ReactDOM;

console.log('Main.tsx 2')

let root = document.querySelector('#root')
render(Routes, root)