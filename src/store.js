'use strict';
var AppDispatcher = require('./dispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('./const');

var CHANGE_EVENT = TodoConstants.EVENT_TYPES.CHANGE;

var _todos = {}; // collection of todo items

class TodoStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.handleAction.bind(this));
  }
  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  handleAction(payload) {
    var action = payload;
    var text;

    switch(action.actionType) {
      case TodoConstants.ACTION_TYPES.TODO_CREATE:
        text = action.text.trim();
        if (text !== '') {
          create(text);
          this.emitChange();
        }
        break;

      case TodoConstants.ACTION_TYPES.TODO_DESTROY:
        destroy(action.id);
        this.emitChange();
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  }
}


module.exports = (new TodoStore());


/**
 * Create a TODO item.
 * @param {string} text The content of the TODO
 */
function create(text) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Delete a TODO item.
 * @param {string} id
 */
function destroy(id) {
  delete _todos[id];
}

