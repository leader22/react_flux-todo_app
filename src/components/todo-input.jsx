const React = require('react');

const TodoActions = require('../actions/todo');

const TodoInput = React.createClass({
  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this._onChange}
          value={this.state.value}
          autoFocus={true}
        />
        <button onClick={this._onClick}>Add</button>
      </div>
    );
  },

  _onChange(ev) {
    this.setState({
      value: ev.target.value
    });
  },

  _onClick() {
    TodoActions.create(this.state.value);
    this.setState({
      value: ''
    });
  }
});

module.exports = TodoInput;
