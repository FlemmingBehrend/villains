require('./styles.css');
let client = require('./client');

window.game = {
    chat: client.chat,
    click: function() {
        alert('test');
    }
};

console.log('window.game', window.game);