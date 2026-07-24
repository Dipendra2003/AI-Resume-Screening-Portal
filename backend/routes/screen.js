import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { extractText, extractName } from "../services/parser.js";
import { scoreResumes } from "../services/nlp.js";

const router = express.Router();

// Configure multer — store in /uploads, accept PDF + DOCX only
const uploadDir = path.resolve("uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});

const fileFilter = (_req, file, cb) => {
  const allowed = [".pdf", ".doc", ".docx", ".txt"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowed.includes(ext)) cb(null, true);
  else cb(new Error(`Unsupported file type: ${ext}`), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB per file
});

/**
 * POST /api/screen
 * Body: multipart/form-data
 *   - jobDescription: string
 *   - resumes: File[] (PDF / DOCX)
 */
router.post("/screen", upload.array("resumes", 20), async (req, res) => {
  const files = req.files;
  const { jobDescription } = req.body;

  // Validate inputs
  if (!jobDescription || !jobDescription.trim()) {
    cleanupFiles(files);
    return res.status(400).json({ error: "Job description is required." });
  }
  if (!files || files.length === 0) {
    return res.status(400).json({ error: "At least one resume file is required." });
  }

  try {
    // Parse all resumes in parallel
    const parsed = await Promise.all(
      files.map(async (file) => {
        const text = await extractText(file.path, file.originalname);
        const name = extractName(text, file.originalname);
        return { filename: file.originalname, text, name };
      })
    );

    // Run NLP scoring
    const candidates = scoreResumes(jobDescription, parsed);

    // Compute summary stats
    const scores = candidates.map((c) => c.score);
    const avgScore = scores.length
      ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10
      : 0;
    const shortlisted = candidates.filter((c) => c.status === "Shortlisted").length;

    return res.json({
      candidates,
      totalScanned: candidates.length,
      shortlisted,
      avgScore,
    });
  } catch (err) {
    console.error("Screening error:", err);
    return res.status(500).json({ error: "Failed to process resumes. " + err.message });
  } finally {
    // Always clean up temp files
    cleanupFiles(files);
  }
});

function cleanupFiles(files) {
  if (!files) return;
  files.forEach((f) => {
    try {
      if (fs.existsSync(f.path)) fs.unlinkSync(f.path);
    } catch (_) {}
  });
}

export default router;
