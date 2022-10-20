const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const peopleRouter = require('./people.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/people', peopleRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
