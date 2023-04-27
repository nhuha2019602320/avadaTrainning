const { getAllTodoList } = require("../database/todoRepository");
const serviceAccount = require("../serviceAccount.json");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const docRef = db.collection("todos");

/**
 *
 * @returns
 */
async function getAllTodo() {
  const todoRespon = await docRef.get();
  let todoLists = [];
  todoRespon.forEach((doc) => {
    const idTodo = {
      id: doc.id,
    };
    return todoLists.push({ ...idTodo, ...doc.data() });
  });
  return todoLists;
}

/**
 *
 * @param {*} id
 * @returns
 */
async function getOneTodo(id) {
  const datares = docRef.doc(id);
  const doc = await datares.get();
  return doc.data();
}

/**
 *
 * @param {*} dataReq
 * @returns
 */
async function createNewTodo(dataReq) {
  return await docRef.add(dataReq);
}

/**
 *
 * @param {*} listId
 * @returns
 */
async function deleteTodoById(listId) {
  return await listId.forEach((id) => docRef.doc(id).delete());
}

/**
 *
 * @param {*} fields
 * @param {*} id
 * @returns
 */
async function updateTodoById(fields, id) {
  return docRef.doc(id).update(fields);
}

/**
 *
 * @param {*} listId
 * @returns
 */
async function updateManyTodoById(listId) {
  return await listId.forEach((id) => {
    return docRef.doc(id).update({
      isCompleted: true,
    });
  });
}

module.exports = {
  getAllTodo,
  getOneTodo,
  createNewTodo,
  deleteTodoById,
  updateTodoById,
  updateManyTodoById,
};
