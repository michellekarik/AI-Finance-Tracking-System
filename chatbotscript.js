const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

async function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  // Display user message
  chatBox.innerHTML += `<div class="user-msg">${message}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  userInput.value = "";

  // Send message to backend
  const response = await fetch("http://127.0.0.1:5000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await response.json();

  // Display bot reply
  chatBox.innerHTML += `<div class="bot-msg">${data.reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Button click
sendBtn.addEventListener("click", sendMessage);

// Pressing Enter also sends message
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});
