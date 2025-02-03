import "./App.css";

import { Assistant } from "./components/assistants/openai";
import { Chat } from "./components/Chat/Chat";
import { Controls } from "./components/Controls/Controls";
import { useState } from "react";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    try {
      const result = await assistant.chat(content, messages);
      addMessage({ content: result, role: "assistant" });
    } catch (error) {
      addMessage({
        content: "Sorry, I could not process your request. Please try again.",
        role: "System",
      });
    }
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
