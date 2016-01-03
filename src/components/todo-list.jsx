const React = require('react');

const TodoList = React.createClass({
  render() {
    var todos = this.props.allTodos;

    return (
      <ul>
        { todos.map((todo, idx) => {
          return (
            <li key={idx}>{todo}</li>
          );
        }) }
      </ul>
    );
  }
});

module.exports = TodoList;
