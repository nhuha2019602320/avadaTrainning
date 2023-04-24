const Koa = require("koa");
const koaBody = require("koa-body");
const routes = require("./routes/todoRouter.js");
const render = require("koa-ejs");
const path = require("path");
const cors = require('@koa/cors');
const app = new Koa();
const morgan = require('koa-morgan')

app.use(koaBody());
app.use(cors());
// render(app, {
//   root: path.join(__dirname, "views"),
//   layout: "/layout/template",
//   viewExt: "html",
//   cache: false,
//   debug: true,
// });
// app.use(morgan("combined"))
app.use(routes.routes());
app.use(routes.allowedMethods());
console.log("server is listening on port 5000");
app.listen(5000);
