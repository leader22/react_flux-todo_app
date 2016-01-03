const React = require('react');

const store = require('../store');
const TodoList = require('./todo-list.jsx');

function getTodoState() {
  return {
    allTodos: [1, 2, 4, 5]
  };
}

const TodoApp = React.createClass({
  getInitialState() {
    return getTodoState();
  },

  render() {
    return (
      <div>
        <header>
          <h1>
            TodoApp
          </h1>
        </header>
        <TodoList allTodos={this.state.allTodos} />
      </div>
    );
  }
});

module.exports = TodoApp;
