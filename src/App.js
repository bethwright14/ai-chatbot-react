import "./App.css";

import { Chat } from "./components/Chat/Chat";
import { Controls } from "./components/Controls/Controls";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  function handleContentSend(content) {
    setMessages((prevMessages) => [...prevMessages, { content, role: "user" }]);
  }
  return (
    <div className="App">
      <header className="Header">
        <img className="Logo" src="/chat-bot.png" />
        <h2 className="Title">AI Chatbot</h2>
      </header>
      <div className="ChatContainer">
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;
