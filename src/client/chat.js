module.exports = Chat;

let input, messages, socket;

function Chat(document, sock) {
    input = document.getElementById('input');
    messages = document.getElementById('messages');
    socket = sock;

    socket.on('addToChat', (text) => {
        messages.innerHTML += `<div>${socket.id} : ${text}</div>`;
        messages.scrollTop = messages.scrollHeight;
    });

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 67 && event.ctrlKey) {
            input.focus();
        }
    });
}

Chat.prototype.send = function (event) {
    if (event.key === 'Enter') {
        console.log('send chat', event.srcElement.value);
        socket.emit('sendChatMessageToServer', event.srcElement.value);
        event.srcElement.value = '';
    }
};