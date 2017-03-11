function GameObject(id) {

    this._x = 0;
    this._y = 0;
    this._id = id;

}

GameObject.prototype.getGameId = function() {
    return this._id;
};

module.exports = GameObject;