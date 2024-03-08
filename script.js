document.addEventListener('DOMContentLoaded', function() {
  const messageContainer = document.getElementById('message-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', function() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
      appendMessage('sent', messageText);
      messageInput.value = '';
      // Here you would typically send the message to the server
    }
  });

  function appendMessage(type, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.innerText = text;
    messageContainer.appendChild(messageDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});
