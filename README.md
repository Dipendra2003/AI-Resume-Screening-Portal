# AI Resume Screening Portal

A full-stack web application with a **React + Vite** frontend and **Node.js + Express** backend.

## 📁 Project Structure

```
AI-Resume-Screening-Portal/
├── frontend/          # React + Vite app (runs on port 5173)
│   ├── src/
│   ├── public/
│   ├── vite.config.ts
│   └── package.json
├── backend/           # Express API server (runs on port 5000)
│   ├── index.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Run Development Servers

**Frontend** (http://localhost:5173):
```bash
cd frontend
npm run dev
```

**Backend** (http://localhost:5000):
```bash
cd backend
npm run dev
```

## 🔗 API Proxy

The frontend Vite dev server proxies all `/api/*` requests to `http://localhost:5000`, so you can call the backend like:

```js
fetch('/api/hello')  // proxied to http://localhost:5000/api/hello
```

## 🛠️ Tech Stack

| Layer    | Technology              |
|----------|------------------------|
| Frontend | React 19, Vite 8, TypeScript |
| Backend  | Node.js, Express 5, dotenv |
| Styling  | CSS / your choice      |
