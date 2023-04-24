const fs = require("fs");
const Products = require("../database/products.json");

const productController = {
  getAllProducts: (ctx, next) => {
    try {
      const queyData = ctx.request.query;
      console.log("limit", queyData.limit);
      if (queyData.limit) {
        ctx.body = Products.data.slice(0, Number(queyData.limit));
      }
      if (queyData.sort) {
        if (queyData.sort === "desc") {
          ctx.body = Products.data.sort(
            (pre, nex) => moment(nex.createdAt) - moment(pre.createdAt)
          );
        }
      } else {
        ctx.body = Products.data;
      }
    } catch (error) {
      return (ctx.body = {
        status: "error!",
        message: "error",
      });
    }
  },
  createProduct: (ctx,next) => {
    try {
      const queryData = ctx.request.body;
      console.log("query", queryData)
      // const newProduct = {}
      // Products.push(queryData)
    //   fs.readFile('../database/products.json', function (err, data) {
    //     var json = JSON.parse(Products)
    //     json.push('search result: ' + queryData)
    
    //     fs.writeFile("../database/products.json", JSON.stringify(json))
    // })
    
    } catch (error) {
      return (ctx.body = {
        status: "create not success!",
        message: "error",
      });     
    }
  },
};

module.exports = productController;
