const {
  getAllTodo,
  getOneTodo,
  createNewTodo,
  deleteTodoById,
  updateTodoById,
  updateManyTodoById,
} = require("../database/todoRepository");

/**
 *
 * @param {*} ctx
 */
async function getTodos(ctx) {
  try {
    const result = await getAllTodo();
    ctx.body = result;
  } catch (e) {
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
async function getTodo(ctx) {
  try {
    const { id } = ctx.params;
    const result = await getOneTodo(id);
    return (ctx.body = result);
  } catch (e) {
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
async function createTodo(ctx) {
  try {
    const dataReq = ctx.req.body;
    await createNewTodo(dataReq);
    return (ctx.body = {
      message: "Create success",
    });
  } catch (error) {
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
async function deleteManyTodo(ctx) {
  try {
    const listId = ctx.params.id.split(",");
    await deleteTodoById(listId);
    return (ctx.body = {
      message: "delete success",
    });
  } catch (e) {
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
 */
async function updateTodo(ctx) {
  try {
    const { id } = ctx.params;
    const fields = ctx.req.body;
    await updateTodoById(fields, id);
    ctx.body = {
      message: "update success",
    };
  } catch (e) {
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
async function updateManyTodo(ctx) {
  try {
    const listId = ctx.params.id.split(",");
    await updateManyTodoById(listId);

    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
}

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteManyTodo,
  updateTodo,
  updateManyTodo,
};
