const React = require('react');

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
          className="destroy"
          onClick={this._onDestroyClick}
        />
      </li>
    );
  },

  _onDestroyClick(ev) {
    ev.preventDefault();
    console.log('delete!');
  }
});

module.exports = TodoItem;
