var mongoose = require("mongoose");
mongoose.set('debug', true);

mongoose.connect("mongodb://kenny:kenny@ds221609.mlab.com:21609/todo_api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");