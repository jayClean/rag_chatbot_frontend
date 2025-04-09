export default function MessageBubble({ message }) {
    const isUser = message.sender === "user";
    return (
      <div className={`my-2 p-3 rounded-xl max-w-[80%] ${isUser ? "bg-blue-100 self-end" : "bg-gray-200 self-start"}`}>
        <p className="text-sm">{message.text}</p>
      </div>
    );
  }
  