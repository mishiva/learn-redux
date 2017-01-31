const User = require('../models').User;

module.exports = {
  create(req, res, next) {
    return User
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => next(error));
  },

};