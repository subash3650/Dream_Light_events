const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5173;

const app = express();
app.use(cors());
app.use(express.json());

const EVENTS_PATH = path.join(__dirname, "src", "data", "events.json");
const VERCEL_DEPLOY_HOOK_URL = process.env.VERCEL_DEPLOY_HOOK_URL;

// Root route (so Render doesn’t 404 when visiting the base URL)
app.get("/", (req, res) => {
    res.send("🚀 API is running! Try POST /api/add-event");
});

app.post("/api/add-event", async (req, res) => {
    const { name, description, date, type, image } = req.body;

    // Ensure file exists
    if (!fs.existsSync(EVENTS_PATH)) {
        fs.writeFileSync(EVENTS_PATH, "[]", "utf-8");
    }

    const events = JSON.parse(fs.readFileSync(EVENTS_PATH, "utf-8"));
    const newId = events.length ? Math.max(...events.map((e) => e.id)) + 1 : 1;

    const newEvent = { id: newId, name, description, date, type, image };
    events.push(newEvent);

    fs.writeFileSync(EVENTS_PATH, JSON.stringify(events, null, 2));

    // Optionally trigger Vercel redeploy
    if (VERCEL_DEPLOY_HOOK_URL) {
        try {
            await fetch(VERCEL_DEPLOY_HOOK_URL, { method: "POST" });
        } catch (e) {
            console.error("Failed to trigger redeploy:", e.message);
        }
    }

    res.json({ success: true, event: newEvent });
});

app.listen(PORT, () => {
    console.log(`✅ API server running on port ${PORT}`);
});
