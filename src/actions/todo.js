var AppDispatcher = require('../dispatcher');
var TodoConstants = require('../const');

var TodoActions = {

  /**
   * @param  {string} text
   */
  create(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.ACTION_TYPES.TODO_CREATE,
      text: text
    });
  },

  /**
   * @param  {string} id
   */
  destroy(id) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.ACTION_TYPES.TODO_DESTROY,
      id: id
    });
  },

};

module.exports = TodoActions;
