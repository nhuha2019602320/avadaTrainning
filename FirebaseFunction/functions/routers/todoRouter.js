const Router = require("koa-router");
const todoHandler = require("../handler/todoHandler.js");

const router = new Router({
  prefix: "/api",
});

router.get("/todos", todoHandler.getTodos);

router.get("/todo/:id", todoHandler.getTodo);

router.post("/todos", todoHandler.createTodo);

router.put("/todo/:id", todoHandler.updateTodo);

router.put("/todos/:id", todoHandler.updateManyTodo);

router.delete("/todos/:id", todoHandler.deleteManyTodo);

module.exports = router;
