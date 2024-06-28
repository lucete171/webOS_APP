const ws = new WebSocket('ws://localhost:3000'); // Set Server IP and port number
const chatLog = document.getElementById('chatLog');
const messageBox = document.getElementById('messageBox');
const sendButton = document.getElementById('btn-message');

ws.onmessage = function(event) {
const data = JSON.parse(event.data);
chatLog.value += data.id + ': ' + data.message + '\n'; // Add ID and Message to textarea
};

sendButton.onclick = function() {
    if (messageBox.value.trim().length > 0) {
        const message = JSON.stringify({ text: messageBox.value });
        ws.send(message); // Send message object to server
        messageBox.value = ''; // Initialize inputbox
    }
};