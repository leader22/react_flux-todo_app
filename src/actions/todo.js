var AppDispatcher = require('../dispatcher');
var TodoConstants = require('../const');

var TodoActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.ACTION_TYPES.TODO_CREATE,
      text: text
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.ACTION_TYPES.TODO_DESTROY,
      id: id
    });
  },

};

module.exports = TodoActions;
