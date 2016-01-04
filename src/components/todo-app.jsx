const React = require('react');

const store = require('../store');
const TodoInput = require('./todo-input.jsx');
const TodoList  = require('./todo-list.jsx');

function getTodoState() {
  return {
    allTodos: store.getAll()
  };
}

const TodoApp = React.createClass({
  getInitialState() {
    return getTodoState();
  },

  componentDidMount() {
    store.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
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
      </div>
    );
  },

  _onChange() {
    this.setState(getTodoState());
  }
});

module.exports = TodoApp;
