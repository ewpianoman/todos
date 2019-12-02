var express = require('express');
var router = express.Router();
var todos = require('../models/todos');
/* GET todos. */
router.get('/', function(req, res, next) {
  res.render('todos', {title: 'Todos', todos: todos});
});

module.exports = router;
