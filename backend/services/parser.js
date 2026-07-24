import { createRequire } from "module";
import mammoth from "mammoth";
import fs from "fs";
import path from "path";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

/**
 * Extracts plain text from an uploaded file (PDF or DOCX).
 * @param {string} filePath - Absolute path to the temp file
 * @param {string} originalName - Original filename (for extension detection)
 * @returns {Promise<string>} - Extracted text
 */
export async function extractText(filePath, originalName) {
  const ext = path.extname(originalName).toLowerCase();
  const buffer = fs.readFileSync(filePath);

  if (ext === ".pdf") {
    const data = await pdfParse(buffer);
    return data.text || "";
  }

  if (ext === ".docx" || ext === ".doc") {
    const result = await mammoth.extractRawText({ buffer });
    return result.value || "";
  }

  // Fallback: treat as plain text
  return buffer.toString("utf-8");
}

/**
 * Attempts to extract a candidate name from resume text.
 * Heuristic: first non-empty line that looks like a name.
 */
export function extractName(text, filename) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  for (const line of lines.slice(0, 5)) {
    // A name line: 2-4 words, mostly letters, no special characters
    if (/^[A-Za-z]{2,}\s+[A-Za-z]{2,}(\s+[A-Za-z]{2,})?$/.test(line)) {
      return line;
    }
  }

  // Fallback: derive from filename
  return path
    .basename(filename, path.extname(filename))
    .replace(/[_\-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
