var passport = require("passport");
var passportJWT = require("passport-jwt");
var config = require("../config/config.js"); 
const User = require('../models').User;


var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var strategyParams = {  
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromHeader('x-access-token')
};

module.exports = function() {  
  var strategy = new Strategy(strategyParams, function(payload, done) {
    User.findById(payload.id).then(user => {
      if (user) {
        return done(null, {
            id: user.id
        });
      } else {
        return done(new Error("User not found"), null);
      }
    });
  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", config.jwt.session);
    }
  };
};