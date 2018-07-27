const Todo = require("../models").Todo

module.exports = {
  create(req, res){
    return Todo.create({
      task: req.body.task,
    })
    // .then(todo => res.status(201).send(todo))
    .then(todo => res.redirect('/todos'))
    .catch(error => res.status(400).send(error))
  },

  index(req, res){
    Todo.all()
            // .then(todo => res.status(201).send(todo)) //for api response
            .then(todos => res.render('todos/index', { todos})) // for ui response
            .catch(error => res.status(400).send(error))
  },
  show(req, res){
    return Todo.findById(req.params.todoId)
            .then(todo => {
              if(!todo){
                return res.status(404).send({
                        message: 'Todo Not Found',
                      });

              }else{
                return res.status(201).send(todo)
              }
            })
            .catch(error => res.status(400).send(error))
  },
  update(req, res){
    return  Todo.findById(req.params.todoId)
              .then(todo => {
                if(!todo){
                  return res.status(404).send({
                          message: 'Todo Not Found',
                        });
                }

                return todo.update({
                  task: req.body.task || todo.task,
                })
                .then(todo => res.status(201).send(todo))
                .catch(error => res.status(400).send(error))

              })
              .catch(error => res.status(400).send(error))
  },
  delete(req, res){
    return  Todo.findById(req.params.todoId)
              .then(todo => {
                if(!todo){
                  return res.status(404).send({
                          message: 'Todo Not Found',
                        });
                }
                return todo.destroy()
                .then(todo => res.status(201).send(todo))
                .catch(error => res.status(400).send(error))
              })
              .catch(error => res.status(400).send(error))
  },
  toggle_completed(req, res){
    return  Todo.findById(req.params.todoId)
              .then(todo => {
                if(!todo){
                  return res.status(404).send({
                          message: 'Todo Not Found',
                        });
                }
                return todo.update({
                  completed: !todo.completed,
                })
                // .then(todo => res.status(201).send(todo)) // for api response
                .then(todo => res.redirect('/todos'))  // for ui response
                .catch(error => res.status(400).send(error))

              })
              .catch(error => res.status(400).send(error))
  },
}