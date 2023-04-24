const Router = require("koa-router");
const todoHandeler = require("../handlers/todos/todoHandler");
const todoInputMiddleware = require("../middleware/validationUpdateJson");
const { getAll } = require("../database/todoRepository");

/**
 *
 */
const router = new Router({
  prefix: "/api",
});
// router.get("/product", async (ctx) => {
//   const todos = getAll();
//   await ctx.render("/pages/product", {
//     todos,
//   });
// });

// app.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next()
// });
router.get("/todos", todoHandeler.getTodos);

router.post("/todos", todoHandeler.save);

router.put("/todo/:id", todoInputMiddleware, todoHandeler.updateTodo);
router.put("/todos/:id", todoHandeler.updateManyTodo);

router.delete("/todo/:id", todoHandeler.removeTodo);

router.get("/todo/:id", todoHandeler.getToDoById);

module.exports = router;
