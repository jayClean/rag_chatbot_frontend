import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputBar from "./components/InputBar";
import { askQuery } from "./api/chat";

function App() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMsg = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setQuery("");

    try {
      const res = await askQuery(query);
      const botMsg = { sender: "bot", text: res.answer || "I don't know." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Error contacting backend." }]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col h-screen">
      <h1 className="text-2xl font-semibold mb-4">RAG Chatbot</h1>
      <ChatBox messages={messages} />
      <InputBar query={query} setQuery={setQuery} onSend={handleSend} />
    </div>
  );
}

export default App;
