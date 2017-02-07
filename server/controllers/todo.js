const Todo = require('../models').Todo;
const { shapeResult } = require('../helpers');

module.exports = {
  create(req, res, next) {
    return Todo
      .create({
        text: req.body.text || 'name of todo is undefined',
        completed: req.body.complete || false
      })
      .then(todo => res.json(shapeResult(todo)))
      .catch(error => next(error));
  },
  list(req, res, next) {
    return Todo
      .all()
      .then(todos => res.json(shapeResult(todos)))
      .catch(error => next(error));
  },
  delete(req, res, next) {
    return Todo
      .findById(req.params.id)
      .then(todo => {
        if (!todo) {
          let error = new Error('Todo Not Found')
          error.status = 400;
          return next(error);
        }
        return todo
          .destroy()
          .then(() => res.json(shapeResult(req.params.id)))
          .catch(error => next(error));
      })
      .catch(error => next(error));
  },

  update(req, res, next) {
    return Todo
      .findById(req.params.id)
      .then(todo => {
        if (!todo) {
          let error = new Error('Todo Not Found')
          error.status = 400;
          return next(error);
        }
        return todo
          .update({
            text: req.body.text || todo.text,
            complete: req.body.complete || todo.complete || false
          })
          .then(() => res.json(shapeResult(todo)))
          .catch(error => next(error));
      })
      .catch(error => next(error));
  },

};