const Socket = require('socket.io-client/dist/socket.io.js');
const Chat = require('./chat');
const Player = require('./../server/player');
const socket = new Socket();

module.exports = Client;
module.exports.chat = new Chat(window.document, socket);


function Client() {
    let gameArea = document.getElementById('ctx').getContext('2d');
    gameArea.fillText('P', 250, 250);
}





