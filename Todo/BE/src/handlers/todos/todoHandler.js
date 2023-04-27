const {
  add,
  deleteTodo,
  getTodoLists,
  editTodo,
  getTodo,
  getFieldsOfTodo,
  updateAllTodo,
} = require("../../database/todoRepository");

/**
 *
 * @param {*} ctx
 * @returns
 */
function getTodos(ctx) {
  try {
    const { limit, sort, fields } = ctx.request.query;
    const todos = getTodoLists({ limit, sort, fields });
    return (ctx.body = todos);
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */

function getToDoById(ctx) {
  try {
    const { id } = ctx.params;
    const listFields = ctx.request.query.fields;
    const currentTodo = getTodo(id);
    if (currentTodo) {
      const todo = getFieldsOfTodo(currentTodo, listFields);
      ctx.body = todo;
      return todo;
    }

    ctx.status = 404;
    ctx.body = {
      success: false,
      error: "not existed product",
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}
/**
 *
 * @param {*} ctx
 * @returns
 */
function updateTodo(ctx) {
  try {
    const { id } = ctx.params;
    const listId = ctx.params.id.split(",");
    console.log("list", listId);
    const currentTodo = getTodo(id);

    const dataUpdateTodo = ctx.request.body;

    if (currentTodo) {
      const todos = editTodo(dataUpdateTodo, id);
      ctx.body = todos;
      console.log("todo", todos);
      return todos;
    }

    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: "Update failed",
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

function updateManyTodo(ctx) {
  try {
    const listId = ctx.params.id.split(",");
    const result = updateAllTodo(listId);
    return (ctx.body = {
      result,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}
/**
 *
 * @param {*} ctx
 * @returns
 */
function removeTodo(ctx) {
  try {
    const listIdTodo = ctx.params.id.split(",");

    const result = deleteTodo(listIdTodo);
    console.log("result", result);
    return (ctx.body = result);
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

/**
 *
 * @param {*} ctx
 * @returns
 */
function save(ctx) {
  try {
    const postData = ctx.request.body;
    add(postData);
    ctx.status = 201;
    return (ctx.body = {
      // success: true
      ...postData,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
}

module.exports = {
  getTodos,
  getToDoById,
  updateTodo,
  removeTodo,
  save,
  updateManyTodo,
};
