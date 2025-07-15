// УСТАРЕВШИЙ КОД!!!!!!!!!!!!!!!!!!!!!
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(8111);

function handler(req, res){
    fs.readFile(__dirname+'/index.html',
        function(err, data){
            if(err) {
                res.writeHead(500);
                return res.end('index.html not found...');
            }
            
            res.writeHead(200, {'Content-type': 'text/html'});
            res.end(data);
        });
}

// В socket.io версии 4.x метод .listen() больше не используется. 
// Вместо этого нужно создавать сервер 
// и передавать его в конструктор new Server() из socket.io.

