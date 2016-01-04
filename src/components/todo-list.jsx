const React = require('react');

const TodoItem = require('./todo-item.jsx');

const TodoList = React.createClass({
  render() {
    var todos = [];
    var allTodos = this.props.allTodos;

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <ul>
        { todos.length === 0 ?
          <li>
            <label>
              No item
            </label>
          </li> :
          todos
        }
      </ul>
    );
  }
});

module.exports = TodoList;
