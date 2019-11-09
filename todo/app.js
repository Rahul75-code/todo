var express = require('express');
var todocontroller = require('./controller/todocontroller');

var app = express();

//set up templates engine
app.set('view engine','ejs');

//static files
app.use('/public', express.static('public'));

//fire controller
todocontroller(app);

//listen to port
app.listen(3000);
console.log('you are listening to port 3000');
