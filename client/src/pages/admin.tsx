import { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    date: "",
    type: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    color: "#222",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: 4,
    padding: "8px 10px",
    fontSize: 16,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  await fetch("http://localhost:5173/api/add-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setLoading(false);
  alert("Event added! (Redeploy manually on Vercel if needed)");

  setForm({
    name: "",
    description: "",
    date: "",
    type: "",
    image: "",
  });
};


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: "6rem auto",  // <-- was 2rem, now more so it clears navbar height
        display: "flex",
        flexDirection: "column",
        gap: 12,
        background: "#f9f9f9",
        padding: 24,
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  }}
>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
        style={{ ...inputStyle, minHeight: 60 }}
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="type"
        placeholder="Type"
        value={form.type}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          ...inputStyle,
          background: "#222",
          color: "#fff",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}