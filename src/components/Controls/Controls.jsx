import "./Controls.css";

import { SendIcon } from "./SendIcon";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";

export function Controls({ onSend }) {
  const [content, setContent] = useState("");

  function handleContentSend() {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleEnterPress(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleContentSend();
    }
  }

  return (
    <div className="Controls">
      <div className="TextAreaContainer">
        <TextareaAutosize
          className="TextArea"
          placeholder="Message AI Chatbot"
          value={content}
          onChange={handleContentChange}
          onKeyDown={handleEnterPress}
        />
      </div>
      <button className="Button" onClick={handleContentSend}>
        <SendIcon />
      </button>
    </div>
  );
}
