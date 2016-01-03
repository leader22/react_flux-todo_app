'use strict';
const React    = require('react');
const ReactDOM = require('react-dom');

const TodoApp = require('./components/todo-app.jsx');
const store   = require('./store');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('jsApp')
);
