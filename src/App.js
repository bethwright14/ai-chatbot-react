import { useState } from "react";
import "./App.css";
import { Chat } from "./components/Chat/Chat";

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="App">
      <header className="Header">
        <img className="Logo" src="/chat-bot.png" />
        <h2 className="Title">AI Chatbot</h2>
      </header>
      <div className="ChatContainer">
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
