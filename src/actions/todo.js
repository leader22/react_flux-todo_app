var AppDispatcher = require('../dispatcher');
var TodoConstants = require('../const');

var TodoActions = {

  /**
   * @param  {string} text
   */
  create(text) {
    AppDispatcher.dispatch({
      type: TodoConstants.ACTION_TYPES.TODO_CREATE,
      entity: {
        text: text,
        updatedAt: getNow()
      }
    });
  },

  /**
   * @param  {string} id
   */
  destroy(id) {
    AppDispatcher.dispatch({
      type: TodoConstants.ACTION_TYPES.TODO_DESTROY,
      entity: {
        id: id,
        updatedAt: getNow()
      }
    });
  },

};

module.exports = TodoActions;

function getNow() {
  var now = new Date();
  return now.toJSON();
}
