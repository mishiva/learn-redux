const User = require('../models').User;
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../config/config');

module.exports = {
  login(req, res, next) {
    const { email, password } = req.body
    if (!email.length || !password.length) {
      let error = new Error('Invalid fields!');
      error.status = 400;
      return next(error);
    }
    return User.findOne({
      where: { email }
    }).then(user => {
      if (!user) {
        let error = new Error('User Not Found')
        error.status = 404;
        return next(error);
      }
      if (!bcrypt.compareSync(password, user.password)) {
        let error = new Error('Incorrect password!');
        error.status = 400;
        return next(error);
      }

      const token = jwt.sign({id: user.id}, config.jwt.secret, {
        expiresIn: '2d'
      });

      return res.json({
        success: true,
        data: {
          id: user.id,
          token: token,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email
        }

      });

    }).catch(error => next(error));

  },

};