const User = require('../models').User;
const Address = require('../models').Address;
var Sequelize = require('sequelize');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
const { shapeResult } = require('../helpers');
const _ = require('lodash');


module.exports = {
  getCurrentUser(req, res, next) {
    return User.findById(req.user.id).then(user => {
      if (!user) {
        let error = new Error('User Not Found')
        error.status = 404;
        return next(error);
      }
      return res.json(shapeResult(User.toJSON(user)));
    }).catch(error => next(error));

  },

  userList(req, res, next) {
    const { limit, offset } = req.query;
    return User.findAndCountAll({ limit, offset })
      .then(result => {
        result.offset = offset;
        return res.json(shapeResult(result));
      })
      .catch(error => next(error));
  },

  getAddress(req, res, next) {
    return Address
      .findAll({ where: {userId: req.params.userId} })
      .then(address => {
        if (!address) {
          let error = new Error('Address Not Found')
          error.status = 400;
          return next(error);
        }
        return res.json(shapeResult(address[0]))
      })
      .catch(error => next(error));
  },

  updateAddress(req, res, next) {
    return Address
      .update(
        _.pick(req.body, ['city', 'street', 'house']),
        { where: {userId: req.params.userId}, returning: true }
      )
      .then(address => {
        return res.json(shapeResult(address))
      })
      .catch(error => next(error));
  }

};