const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');

const app = http.createServer(handler);

const io = new Server(app, {
  cors: {
    origin: ["http://localhost:8111", "http://192.168.1.101:8111"], // разрешённые источники
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.listen(8111);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('index.html not found...');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

// Пример обработки событий socket.io
io.on('connection', (socket) => {
    console.log('Peer connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});