const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/client/index.html');
});
app.use('/dist/client', express.static(__dirname + '/dist/client'));

const server = require('http').Server(app);
server.listen(1999);

const GameServer = require('./src/server/game-server');
let gameServer = new GameServer(server);
