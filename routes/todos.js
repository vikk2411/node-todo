var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('todos/', { title: 'ToDo List', todos: ["Task 1", "Task 2", "Task 3"] });
});

module.exports = router;
