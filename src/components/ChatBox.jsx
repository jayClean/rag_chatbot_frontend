import MessageBubble from "./MessageBubble";

export default function ChatBox({ messages }) {
  return (
    <div className="flex flex-col gap-1 p-4 h-[70vh] overflow-y-scroll bg-white rounded-lg border border-gray-200">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
    </div>
  );
}
