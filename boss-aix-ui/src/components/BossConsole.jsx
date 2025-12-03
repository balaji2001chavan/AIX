import React, { useState } from "react";

export default function BossConsole() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendToServer() {
    if (!input.trim()) return;

    // UI वर user message दाखवा
    setMessages((old) => [...old, { from: "you", text: input }]);

    try {
      const res = await fetch("http://localhost:5000/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: input,
          userId: "web_user"
        })
      });

      const data = await res.json();

      // backend reply UI ला दाखवा
      setMessages((old) => [...old, { from: "aix", text: data.reply }]);

    } catch (err) {
      setMessages((old) => [
        ...old,
        { from: "error", text: "SERVER ERROR: " + err.message }
      ]);
    }

    setInput("");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "monospace" }}>
      <h2>AIX Boss Console</h2>

      <div style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #555",
        padding: "10px",
        marginBottom: "10px"
      }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <b>{msg.from.toUpperCase()} :</b> {msg.text}
          </div>
        ))}
      </div>

      <input
        style={{ width: "80%", padding: "10px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendToServer()}
        placeholder="Type here..."
      />

      <button
        style={{ padding: "10px 20px", marginLeft: "10px" }}
        onClick={sendToServer}
      >
        Send
      </button>
    </div>
  );
}