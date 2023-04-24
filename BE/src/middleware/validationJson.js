const yup = require("yup");

async function productMiddlewareCreateProduct(ctx, next) {
  try {
    const postData = ctx.request.body;
    let schema = yup.object().shape({
      // name: yup.string().required(),
      // img: yup.string().url().required(),
      // price: yup.number().required(),
      // description: yup.string().required(),
      // color: yup.string().required(),
      id: yup.string().required(),
      // content: yup.string().required(),
    });

    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name,
    };
  }
}

module.exports = productMiddlewareCreateProduct;
