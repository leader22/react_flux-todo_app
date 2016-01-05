const React = require('react');

const todoStore = require('../stores/todo');
const userStore = require('../stores/user');
const TodoInput = require('./todo-input.jsx');
const TodoList  = require('./todo-list.jsx');

const TodoApp = React.createClass({
  getInitialState() {
    return getState();
  },

  componentDidMount() {
    userStore.addChangeListener(this._onChange);
    todoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    userStore.removeChangeListener(this._onChange);
    todoStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <div>
        <header>
          <h1>TodoApp</h1>
        </header>
        <TodoInput />
        <hr />
        <TodoList allTodos={this.state.allTodos} />
        <hr />
        <div>
          Last updated: <span>{this.state.user.updatedAt}</span>
        </div>
      </div>
    );
  },

  _onChange() {
    this.setState(getState());
  }
});

module.exports = TodoApp;

function getState() {
  return {
    user:     userStore.getUser(),
    allTodos: todoStore.getAll()
  };
}
