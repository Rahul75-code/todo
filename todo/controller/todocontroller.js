var bodyParser = require('body-parser');

var data = [{item:'make bed'}, {item:'take tea'}, {item:'brush teeth'}];
var urlencodeParser = bodyParser.urlencoded({extended: false});

module.exports = function (app){

    app.get('/todo', function (req,res) {
        res.render('todo' , {todos : data});
    });

    app.post('/todo', urlencodeParser, function (req,res){
      data.push(req.body) 
      res.json({todos: data}); 
    });

    app.delete('/todo/:item', function (req,res) {
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};