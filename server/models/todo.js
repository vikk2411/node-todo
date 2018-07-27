'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    // Todo.hasMany(models.TodoItem, {
    //       foreignKey: 'todoId',
    //       as: 'todoItems',
    //     });
  };
  return Todo;
};