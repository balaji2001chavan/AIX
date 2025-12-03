import { useState } from "react";

export default function UltraConsole() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    async function sendMessage() {
        if (!input.trim()) return;

        const userMsg = { from: "user", text: input };
        setMessages((m) => [...m, userMsg]);

        const res = await fetch("http://localhost:5000/ai/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: input,
                userId: "main-user",
            }),
        });

        const data = await res.json();
        const botMsg = { from: "aix", text: data.reply };

        setMessages((m) => [...m, botMsg]);
        setInput("");
    }

    return (
        <div style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            background: "rgba(0,0,0,0.4)",
            padding: 20,
            borderRadius: 10,
            color: "white"
        }}>
            <div style={{ maxHeight: "40vh", overflowY: "auto" }}>
                {messages.map((msg, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                        <b>{msg.from === "user" ? "तुम्ही:" : "AIX:"}</b> {msg.text}
                    </div>
                ))}
            </div>

            <input
                style={{
                    width: "80%",
                    padding: 10,
                    borderRadius: 8,
                    border: "none",
                    outline: "none"
                }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type here..."
            />

            <button
                style={{
                    marginLeft: 10,
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "none",
                    background: "cyan",
                    cursor: "pointer"
                }}
                onClick={sendMessage}
            >
                Send
            </button>
        </div>
    );
}