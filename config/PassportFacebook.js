const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const User = require('../models/User');
const findOrCreate = require('mongoose-findorcreate')

passport.use(new FacebookStrategy({
    clientID: 444425035971110,
    clientSecret: 'fb4da3d584fe93dd4e3faf329454324c',
    callbackURL: "https://frozen-ravine-13469.herokuapp.com/login/facebook/callback",
    profileFields: ['id', 'displayName', 'name', 'gender', 'photos'],
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });