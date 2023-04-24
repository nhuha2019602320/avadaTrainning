const fs = require("fs");
const { data: todos } = require("./todos.json");
const { sortArrayObject, pick } = require("../service/libraryArrayObj");

/**
 *
 * @returns
 */
function getAll() {
  return todos;
}

/**
 *
 * @param {*} param0
 * @returns
 */
function getTodoLists({ limit = null, sort = null, fields = null } = {}) {
  let result = todos;

  if (sort) {
    result = result.sort(sortArrayObject("createdAt", sort));
  }
  if (limit) {
    result = result.slice(0, limit);
  }
  if (fields) {
    result = result.map((todo) => pick(todo, fields.split(",")));
  }

  return result;
}

/**
 *
 * @param {*} id
 * @returns
 */
function getTodo(id) {
  return todos.find((todo) => todo.id === id);
}

/**
 *
 * @param {*} todo
 * @param {*} litsFields
 * @returns
 */
function getFieldsOfTodo(todo, litsFields) {
  if (litsFields) var splitField = litsFields.split(",");
  else return todo;
  return pick(todo, splitField);
}
/**
 *
 * @param {*} data
 * @returns
 */
function editTodo(dataUpdate, id) {
  const currentTodo = getTodo(id);
  if (currentTodo) {
    const dataTodos = readFile();
    const dataChange = dataTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...dataUpdate };
      }
      return todo;
    });
    saveFile(dataChange);
    // return currentTodo
    return dataChange;
  }
}

function updateAllTodo(ids) {
  const result = todos.map((todo) => {
    if (ids.includes(todo.id)) {
      return { ...todo,isCompleted: true };
    } else return todo;
  });
  saveFile(result);
  console.log(
    "result", result
  )
  return result
}
/**
 *
 * @param {*} id
 */
function deleteTodo(id) {
  const todoDelete = todos.filter((todo) => {
    return !id.includes(todo.id);
  });
  saveFile(todoDelete);
  return todoDelete;
}

/**
 *
 * @param {*} data
 * @returns
 */
function add(data) {
  const updateTodos = [...todos, data];

  return fs.writeFileSync(
    "./src/database/todos.json",
    JSON.stringify({
      data: updateTodos,
    })
  );
}

/**
 *
 * @param {*} dataFile
 * @returns
 */
function saveFile(dataFile) {
  return fs.writeFileSync(
    "./src/database/todos.json",
    JSON.stringify({ data: dataFile })
  );
}

/**
 *
 * @returns
 */
function readFile() {
  return JSON.parse(fs.readFileSync("./src/database/todos.json")).data;
}

module.exports = {
  getAll,
  getTodoLists,
  getTodo,
  editTodo,
  deleteTodo,
  getFieldsOfTodo,
  add,
  updateAllTodo,
};
