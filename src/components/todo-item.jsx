const React = require('react');

const TodoActions = require('../actions/todo');

const TodoItem = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  render() {
    var todo = this.props.todo;
    return (
      <li key={todo.id}>
        <label>
          {todo.text}
        </label>
        <button
          onClick={this._onDestroyClick}
        >x</button>
      </li>
    );
  },

  _onDestroyClick(ev) {
    ev.preventDefault();
    TodoActions.destroy(this.props.todo.id);
  }
});

module.exports = TodoItem;
