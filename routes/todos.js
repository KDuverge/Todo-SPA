var   express = require("express"),
      router  = express.Router();

var db = require("../models");
var helpers = require("../helpers/todos");


//GET ROUTE
router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo)

//GET ROUTE - SHOW SINGLE PROPERTY
router.route("/:todoid")
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router;