const User = require('../models').User;
const messages = require('../responseMessages');
var Sequelize = require('sequelize');

module.exports = {
  create(req, res, next) {
    return User
      .create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role: 'client'
      })
      .then(user => {
        return res.status(201).send({
          success: true, serverMessage: messages.registration.success
        })
      })
      .catch(Sequelize.ValidationError, (err) => {
        console.log(err)
        return res.status(400).send({success: false, errors: err.errors})
        // return next(error);
      })
      .catch(err => {
        return next(error);
      })
  },

};