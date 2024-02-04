const Router = require('express').Router();
const getplayer = require('./getplayer');

Router.use('/', getplayer);

module.exports = { Router };
