var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ToDo App' });
// });

// router.get('/', function(req, res, next) {
//   res.render('todos/index', { todos: todosController.index});
// });

module.exports = router;
const index = require('./todos');


const todosController = require("../server/controllers").todos

module.exports = app => {
  app.get('/todos', todosController.index)
  app.post('/todos', todosController.create)
  app.get('/todos/:todoId', todosController.show);
  app.put('/todos/:todoId', todosController.update);
  app.delete('/todos/:todoId', todosController.delete);
  app.get('/todos/:todoId/toggle_completed', todosController.toggle_completed);
}