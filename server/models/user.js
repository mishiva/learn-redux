'use strict';
var bcrypt = require('bcryptjs');

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
      validate: {
        isEmail: true
      }
    },
    role: DataTypes.STRING,
    password:  {
      type: Sequelize.STRING,
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
      }
    }
  });
  return User;
};