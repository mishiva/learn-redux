const Todo = require('../models').Todo;


module.exports = {
  create(req, res) {
    return Todo
      .create({
        text: req.body.text,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .all()
      .then(todos => res.status(201).send(todos))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Todo
      .findById(req.params.id)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .destroy()
          .then(() => res.status(200).send(`Todo with id ${req.params.id} is deleted!`))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Todo
      .findById(req.params.id)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            text: req.body.text || todo.text,
            completed: req.body.completed || todo.completed || false
          })
          .then(() => res.status(200).send(todo))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};