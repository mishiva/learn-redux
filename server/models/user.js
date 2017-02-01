'use strict';
var bcrypt = require('bcryptjs');
var _ = require('lodash');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: ['en-US', 'ru-RU']
      }
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: ['en-US', 'ru-RU']
      }
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email is already exists!'
      },
      validate: {
        isEmail: true,
      }
    },
    role: DataTypes.STRING,
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
      set: function(val)  {
        var salt = bcrypt.genSaltSync(8);
        var hash = bcrypt.hashSync(val, salt);
        this.setDataValue('password', hash);
      },
    },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      toJSON: function (data) {
        return _.pick(data, ['id', 'first_name', 'last_name', 'email'])
      }

    }
  });
  return User;
};