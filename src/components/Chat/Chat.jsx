import "./Chat.css";

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Hello! How can I assist you?",
};

export function Chat({ messages }) {
  return (
    <div className="Chat">
      {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => (
        <div key={index} className="Message" data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
}
