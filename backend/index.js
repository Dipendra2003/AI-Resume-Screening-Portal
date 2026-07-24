import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import screenRouter from "./routes/screen.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_req, res) => {
  res.json({ message: "AI Resume Screening API is running 🚀" });
});

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.use("/api", screenRouter);

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
