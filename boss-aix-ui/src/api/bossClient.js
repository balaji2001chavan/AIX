// bossClient.js
export async function askBoss(prompt, userId = "boss") {
  try {
    const res = await fetch("http://localhost:5000/ai/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, userId }),
    });
    const data = await res.json();
    return data.reply ?? data;
  } catch (err) {
    return "Error: " + err.message;
  }
}

export async function executeTask(task) {
  try {
    const res = await fetch("http://localhost:5000/ai/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });
    return await res.json();
  } catch (err) {
    return { status: "error", message: err.message };
  }
}