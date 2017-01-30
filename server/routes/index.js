const todoController = require('../controllers').todo;

module.exports = (router) => {
  router.get('/', (req, res) => {
    return res.status(200).send({
      message: 'Welcome to the Todo API!',
    });
  });

  router.post('/todo', todoController.create);
  router.get('/todo', todoController.list);
  router.delete('/todo/:id', todoController.delete);
  router.put('/todo/:id', todoController.update);
};