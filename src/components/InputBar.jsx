export default function InputBar({ query, setQuery, onSend }) {
    return (
      <div className="flex gap-2 p-4">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-lg"
          placeholder="Ask a question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onSend}>
          Send
        </button>
      </div>
    );
  }
  