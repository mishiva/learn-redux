const User = require('../models').User;
var Sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

module.exports = {
  getCurrentUser(req, res, next) {
    return User.findById(req.user.id).then(user => {
      if (!user) {
        let error = new Error('User Not Found')
        error.status = 404;
        return next(error);
      }
      return res.json({
        success: true,
        data: User.toJSON(user)
      });
    }).catch(error => next(error));

  },

  list(req, res, next) {
    const { limit, offset } = req.body;
    return User.findAndCountAll({ limit, offset })
      .then(result => res.status(201).send(result))
      .catch(error => next(error));
  },


};