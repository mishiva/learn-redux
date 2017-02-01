const todoController = require('../controllers').todo;
const registrationController = require('../controllers').registration;
const authorizationController = require('../controllers').authorization;
const userController = require('../controllers').user;

module.exports = (router, auth) => {
  router.post('/registration', registrationController.create);
  router.post('/auth', authorizationController.login);

  // token required routes
  router.use(auth.authenticate());

  // todo
  router.post('/todo', todoController.create);
  router.get('/todo', todoController.list);
  router.delete('/todo/:id', todoController.delete);
  router.put('/todo/:id', todoController.update);

  // user
  router.get('/user', userController.getCurrentUser);


};