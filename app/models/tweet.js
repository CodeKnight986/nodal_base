'use strict';

const Nodal = require('nodal');

class Tweet extends Nodal.Model {}

Tweet.setDatabase(Nodal.require('db/main.js'));
Tweet.setSchema(Nodal.my.Schema.models.Tweet);

const User = Nodal.require('app/models/user.js')
Tweet.joinsTo(User, {multiple: true});

module.exports = Tweet;
