var   express     = require('express'),
      mongoose    = require('mongoose'),
      bodyParser  = require("body-parser"),
      app         = express(),
      Port        = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


var todoRoutes = require('./routes/todos');

app.get('/', (req, res) => res.sendFile("index.html"))

app.use("/api/todos", todoRoutes);

app.listen(Port, function(){
  console.log(`Server started on ${Port}...`);
});