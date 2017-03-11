const GameObject = require('./game-object');

function Player(id) {

    this._id = id;

}

Player.prototype = new GameObject();

Player.prototype.onConnect = function(socket) {

};

Player.prototype.onDisconnect = function(socket) {

};

module.exports = Player;