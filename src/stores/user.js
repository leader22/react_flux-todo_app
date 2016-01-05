'use strict';
var AppDispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../const');

var CHANGE_EVENT = TodoConstants.EVENT_TYPES.CHANGE;

var _data = {
  updatedAt: 0
};

class UserStore extends EventEmitter {
  constructor() {
    super();
    AppDispatcher.register(this.handleAction.bind(this));
  }

  getUser() {
    return _data;
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

  handleAction(action) {
    var entity = action.entity;

    switch(action.type) {
      case TodoConstants.ACTION_TYPES.TODO_CREATE:
      case TodoConstants.ACTION_TYPES.TODO_DESTROY:
        update(entity.updatedAt);
        this.emitChange();
        break;

      // add more cases for other actionTypes, like TODO_UPDATE, etc.
    }

    return true; // No errors. Needed by promise in Dispatcher.
  }
}

function update(date) {
  _data.updatedAt = date;
}

module.exports = (new UserStore());
