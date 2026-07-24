import natural from "natural";

const { TfIdf, WordTokenizer, PorterStemmer } = natural;
const tokenizer = new WordTokenizer();

// Common stop words to ignore
const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
  "of", "with", "by", "from", "is", "are", "was", "were", "be", "been",
  "being", "have", "has", "had", "do", "does", "did", "will", "would",
  "could", "should", "may", "might", "shall", "can", "this", "that",
  "these", "those", "i", "you", "he", "she", "it", "we", "they",
  "my", "your", "his", "her", "its", "our", "their", "not", "no",
  "so", "if", "as", "up", "out", "also", "more", "than", "then",
  "about", "into", "through", "during", "before", "after", "above",
]);

/**
 * Tokenizes, removes stop words, and stems text.
 */
function preprocessText(text) {
  const tokens = tokenizer.tokenize(text.toLowerCase()) || [];
  return tokens
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t))
    .map((t) => PorterStemmer.stem(t));
}

/**
 * Builds a TF-IDF term frequency vector for a document.
 */
function buildVector(tfidf, docIndex, terms) {
  const vector = {};
  terms.forEach((term) => {
    const val = tfidf.tfidf(term, docIndex);
    if (val > 0) vector[term] = val;
  });
  return vector;
}

/**
 * Computes cosine similarity between two sparse vectors.
 */
function cosineSimilarity(vecA, vecB) {
  const keysA = Object.keys(vecA);
  if (keysA.length === 0) return 0;

  let dot = 0;
  let magA = 0;
  let magB = 0;

  keysA.forEach((key) => {
    dot += (vecA[key] || 0) * (vecB[key] || 0);
    magA += vecA[key] ** 2;
  });

  Object.keys(vecB).forEach((key) => {
    magB += vecB[key] ** 2;
  });

  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

/**
 * Extracts meaningful keywords from a text.
 */
function extractKeywords(text, maxKeywords = 10) {
  const tfidf = new TfIdf();
  tfidf.addDocument(preprocessText(text).join(" "));
  const terms = [];
  tfidf.listTerms(0).slice(0, maxKeywords).forEach((item) => {
    terms.push(item.term);
  });
  return terms;
}

/**
 * Finds keywords from the JD that also appear in the resume text.
 */
function findMatchedKeywords(jdText, resumeText) {
  const jdTokens = new Set(preprocessText(jdText));
  const resumeTokens = new Set(preprocessText(resumeText));
  const matched = [...jdTokens].filter((t) => resumeTokens.has(t));
  // De-stem back to likely original — grab from JD text
  const jdWords = tokenizer.tokenize(jdText.toLowerCase()) || [];
  const result = new Set();
  jdWords.forEach((word) => {
    if (matched.includes(PorterStemmer.stem(word)) && word.length > 3) {
      result.add(word.charAt(0).toUpperCase() + word.slice(1));
    }
  });
  return [...result].slice(0, 8);
}

/**
 * Scores all resumes against a job description using TF-IDF + cosine similarity.
 *
 * @param {string} jobDescription
 * @param {{ filename: string, text: string, name: string }[]} resumes
 * @returns Ranked candidate results
 */
export function scoreResumes(jobDescription, resumes) {
  const tfidf = new TfIdf();

  // Add JD as document 0
  const jdTokens = preprocessText(jobDescription);
  tfidf.addDocument(jdTokens.join(" "));

  // Add each resume as subsequent documents
  const resumeTokens = resumes.map((r) => {
    const tokens = preprocessText(r.text);
    tfidf.addDocument(tokens.join(" "));
    return tokens;
  });

  // Build full vocabulary from all documents
  const vocab = new Set();
  jdTokens.forEach((t) => vocab.add(t));
  resumeTokens.forEach((tokens) => tokens.forEach((t) => vocab.add(t)));
  const terms = [...vocab];

  // Build TF-IDF vector for JD
  const jdVector = buildVector(tfidf, 0, terms);

  // Score each resume
  const scored = resumes.map((resume, i) => {
    const resumeVector = buildVector(tfidf, i + 1, terms);
    const similarity = cosineSimilarity(jdVector, resumeVector);
    const score = Math.round(Math.min(similarity * 150, 100) * 10) / 10; // scale & cap at 100
    const matchedKeywords = findMatchedKeywords(jobDescription, resume.text);

    return {
      filename: resume.filename,
      name: resume.name,
      score,
      matchedKeywords,
      status: score >= 60 ? "Shortlisted" : "Under Review",
    };
  });

  // Sort by score descending and assign ranks
  scored.sort((a, b) => b.score - a.score);
  scored.forEach((c, i) => (c.rank = i + 1));

  return scored;
}
