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
    console.log(req)
    const { limit, offset } = req.query;
    return User.findAndCountAll({ limit, offset })
      .then(result => {
        result.offset = offset;
        return res.json({success: true, data: result})
      })
      .catch(error => next(error));
  },


};