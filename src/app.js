const React    = require('react');
const ReactDOM = require('react-dom');

const TodoApp = require('./components/todo-app.jsx');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('jsApp')
);
