const socketIO = require('socket.io');
let Player = require('player');

module.exports = GameServer;

let connections = [];
let players = [];

function GameServer(server) {
    initConnectionLogic(server);
}

function initConnectionLogic(server) {
    const io = socketIO(server, {});
    io.on('connect', function (socket) {
        let id = require('crypto').randomBytes(16).toString('hex');
        console.log('socket connected', id);

        socket.gameId = id;
        connections.push(socket);

        let player = new Player(id);
        players.push(player);

        console.log('player.getGameId()', player.getGameId());
        socket.on('sendChatMessageToServer', (text) => {
            console.log('sendChatMessageToServer', text);
            for (let socket of connections) {
                console.log('send addToChat', socket.gameId, text);
                socket.emit('addToChat', text);
            }
        });

        socket.on('disconnect', () => {
            console.log('disconnect', id);
            delete connections[id];
            delete players[id];
        });

    });
}


setInterval(() => {
    for (let socket of connections) {

    }
});