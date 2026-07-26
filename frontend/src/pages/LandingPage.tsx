import { useState } from 'react'
import { Link } from 'react-router-dom'

const logos = ['IPSUM', 'Logoipsum', 'Lumina', 'LOGOTYPE']

const steps = [
  { num: '01', title: 'Simple And Fast Setup', desc: 'Paste your target job description to establish the screening baseline.' },
  { num: '02', title: 'Upload Resumes Effortlessly', desc: 'Drag and drop up to 20 candidate resumes in PDF or DOCX formats.' },
  { num: '03', title: 'Review Ranked Shortlist', desc: 'Instantly view candidates ranked by NLP relevance scores with keywords.' },
]

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`animate-fade-in-up card-shimmer rounded-2xl border transition-all duration-300 overflow-hidden ${open
          ? 'border-violet-200 bg-violet-50/30 shadow-md shadow-violet-100/40'
          : 'border-slate-100 bg-white shadow-sm hover:border-violet-100 hover:shadow-md'
        }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`font-extrabold text-sm transition-colors duration-300 ${open ? 'text-violet-700' : 'text-slate-900 group-hover:text-violet-700'}`}>
          {question}
        </span>
        {/* Chevron */}
        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-violet-600 rotate-180' : 'bg-slate-100 group-hover:bg-violet-100'
          }`}>
          <svg className={`w-3.5 h-3.5 transition-colors duration-300 ${open ? 'text-white' : 'text-slate-500 group-hover:text-violet-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Answer – extremely reliable max-height + opacity transition */}
      <div
        className="transition-all duration-350 ease-in-out overflow-hidden"
        style={{
          maxHeight: open ? '200px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        <p className="px-6 pb-5 text-slate-500 text-sm font-medium leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className="min-h-screen bg-[#fcfdff] text-slate-900 font-sans pt-16 overflow-hidden">
      {/* Background clouds / blurs */}
      <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none overflow-hidden z-0">
        <img
          src="/sky_clouds_background.png"
          alt="Sky and Clouds Background"
          className="w-full h-full object-cover opacity-85"
        />
        {/* Subtle blur overlay & color enhancement */}
        <div className="absolute inset-0 bg-[#e0f2fe]/5 backdrop-blur-[2px]" />
        {/* Soft gradient mask to blend bottom transition smoothly into the white page */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#fcfdff]" />
      </div>

      {/* Header (Nav bar is fixed from App.tsx, but let's match styles) */}

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Tag */}
          <div className="animate-bounce-in-down inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[11px] font-bold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            AI Resume Screener
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up delay-200 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.15] mb-6">
            Simplify Resume Screening<br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Boost Hiring Productivity
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-400 text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Easily manage resumes and enhance productivity from start to finish. Paste your JD,
            upload candidate profiles, and let NLP rank the best matches instantly.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-600 flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-6 py-3 rounded-full bg-[#5046e5] hover:bg-[#4338ca] text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/20 hover:scale-[1.02] active:scale-95"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-sm hover:scale-[1.02]"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Dashboard Mockup with Floating Role Tags */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Floating Role Badges */}
          <div className="animate-float-x delay-100 absolute top-[20%] left-[-5%] z-20 flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-full shadow-lg cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
            <span className="text-xs font-bold text-slate-700">Analyst</span>
          </div>
          <div className="animate-float-y delay-300 absolute top-[15%] right-[-5%] z-20 flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-full shadow-lg cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
            <span className="text-xs font-bold text-slate-700">Programmer</span>
          </div>
          <div className="animate-float-y delay-500 absolute bottom-[35%] left-[-10%] z-20 flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-full shadow-lg cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <span className="text-xs font-bold text-slate-700">Web Developer</span>
          </div>
          <div className="animate-float-x delay-700 absolute bottom-[25%] right-[-8%] z-20 flex items-center gap-2 px-3 py-2 bg-white border border-slate-100 rounded-full shadow-lg cursor-default">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
            <span className="text-xs font-bold text-slate-700">Human Resources</span>
          </div>

          {/* Recruiter Dashboard Mockup Frame */}
          <div className="rounded-3xl border border-slate-100/80 bg-white/90 backdrop-blur-md shadow-[0_20px_50px_rgba(79,70,229,0.08)] p-6 sm:p-8">
            {/* Mock Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-md shadow-violet-500/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-extrabold text-slate-900 text-base tracking-tight">RecruitAI</span>

                {/* Mock Tabs */}
                <div className="hidden md:flex items-center gap-4 ml-8 text-xs font-bold text-slate-400">
                  <span className="text-violet-600 bg-violet-50/50 px-2.5 py-1.5 rounded-lg">Dashboard</span>
                  <span>My Tasks</span>
                  <span>Candidate Pool</span>
                  <span>Reporting</span>
                </div>
              </div>

              {/* Profile icon */}
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">👤</span>
              </div>
            </div>

            {/* Board Title */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-extrabold text-slate-950 text-base">Candidate Screening Boards</h3>
                <p className="text-slate-400 text-xs mt-0.5">Frontend Developer Pipeline</p>
              </div>
            </div>

            {/* Mock Pipeline Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Column 1: Applied */}
              <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Applied</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-200/50 rounded-full text-slate-600">12</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">Alex Rivera</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">78% Match</span>
                    <span className="text-[9px] font-bold text-slate-400">1d ago</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">Jane Smith</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">85% Match</span>
                    <span className="text-[9px] font-bold text-slate-400">2d ago</span>
                  </div>
                </div>
              </div>

              {/* Column 2: In Process */}
              <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Reviewing</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-200/50 rounded-full text-slate-600">4</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">Liam Chen</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">91% Match</span>
                    <span className="text-[9px] font-bold text-slate-400">3h ago</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">Emma Watson</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">65% Match</span>
                    <span className="text-[9px] font-bold text-slate-400">12h ago</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Shortlisted */}
              <div className="p-4 rounded-2xl bg-violet-50/20 border border-violet-100/50 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-violet-600 uppercase tracking-wide">Shortlisted</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-violet-100/50 rounded-full text-violet-600">3</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-violet-100/60 shadow-sm ring-1 ring-violet-50">
                  <p className="text-xs font-bold text-slate-800">Sophia Patel</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['React', 'Vite', 'TypeScript'].map((tech) => (
                      <span key={tech} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-violet-50 text-violet-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">95% Match</span>
                    <span className="text-[9px] font-bold text-slate-400">4d ago</span>
                  </div>
                </div>
              </div>

              {/* Column 4: Hired */}
              <div className="p-4 rounded-2xl bg-slate-50/50 border border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Hired</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-200/50 rounded-full text-slate-600">2</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">Michael Brown</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">92% Match</span>
                    <span className="text-[9px] font-bold text-slate-400">5d ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Advanced Features Section – Bento Grid */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
              Unlock Premium Benefits With Our Advanced Features.
            </h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Powerful AI-driven tools designed to scale your candidate screening with precision and speed.
            </p>
          </div>

          {/* Top row – 2 large asymmetric cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* Card 1: Upload → AI → Rank flow */}
            <div className="card-shimmer animate-fade-in-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef2ff] via-[#f0f4ff] to-[#e8effe] border border-[#e0e7ff] p-7 hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-500">
              <div className="flex items-center justify-center gap-4 mb-8 pt-2">
                <div className="animate-scale-in delay-200 w-20 h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center">
                  <span className="text-[11px] font-extrabold text-slate-600 tracking-wide">UPLOAD</span>
                </div>
                <div className="flex items-center gap-1 text-indigo-300">
                  <div className="w-5 h-px bg-indigo-300" />
                  <div className="animate-pulse-dot delay-300 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <div className="w-5 h-px bg-indigo-300" />
                </div>
                <div className="animate-float-y delay-100 w-16 h-16 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1 text-indigo-300">
                  <div className="w-5 h-px bg-indigo-300" />
                  <div className="animate-pulse-dot delay-500 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <div className="w-5 h-px bg-indigo-300" />
                </div>
                <div className="animate-scale-in delay-400 w-20 h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center">
                  <span className="text-[11px] font-extrabold text-slate-600 tracking-wide">RANK</span>
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Start Screening, Scale Results</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                Leverage NLP to parse and analyze resumes, boost accuracy, and make data-driven shortlisting decisions.
              </p>
            </div>

            {/* Card 2: Match Score Slider */}
            <div className="card-shimmer animate-fade-in-up delay-200 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f0f9ff] via-[#e8f4fe] to-[#eef2ff] border border-[#dbeafe] p-7 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-500">
              <div className="flex flex-col items-center mb-8 pt-2">
                <div className="animate-bounce-in-down delay-400 mb-3 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-extrabold text-indigo-600 self-end mr-2">
                  95% Match
                </div>
                <div className="relative w-full max-w-xs">
                  <div className="w-full h-3 rounded-full bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600" />
                  <div className="animate-slide-in-right delay-500 absolute top-1/2 right-[5%] w-7 h-7 rounded-full bg-white border-4 border-indigo-500 shadow-lg shadow-indigo-500/20" />
                </div>
                <div className="flex justify-between w-full max-w-xs mt-2 text-[10px] font-bold text-slate-400">
                  <span>0%</span><span>50%</span><span>100%</span>
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2">Industry-Leading Match Accuracy</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm">
                Push precision to the limits with TF-IDF cosine similarity scoring, built for high-accuracy candidate filtering.
              </p>
            </div>
          </div>

          {/* Bottom row – 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 3: Bar Chart */}
            <div className="card-shimmer animate-fade-in-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef2ff] to-[#f5f7ff] border border-[#e0e7ff] p-6 hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-500">
              <div className="relative flex items-end justify-center gap-3 h-24 mb-6">
                <div className="animate-bounce-in-down delay-200 absolute -top-1 right-8 px-2 py-0.5 rounded-lg bg-white border border-indigo-100 shadow text-[10px] font-extrabold text-indigo-600">
                  10k+
                </div>
                {[38, 55, 72, 100].map((h, i) => (
                  <div
                    key={i}
                    className="animate-grow-up w-9 rounded-t-xl bg-gradient-to-t from-indigo-400 to-indigo-200 opacity-90"
                    style={{ height: `${h}%`, animationDelay: `${0.15 + i * 0.1}s` }}
                  />
                ))}
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">10k+ Resumes Processed</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                A massive throughput allowance for enterprise-scale hiring pipelines.
              </p>
            </div>

            {/* Card 4: API Endpoints */}
            <div className="card-shimmer animate-fade-in-up delay-200 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f0f9ff] to-[#eef2ff] border border-[#dbeafe] p-6 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-500">
              <div className="space-y-2.5 mb-6 pt-1">
                <div className="animate-fade-in-up delay-100 flex items-center gap-3">
                  <span className="px-2 py-1 rounded-lg bg-emerald-100 text-emerald-700 font-extrabold text-[10px] shrink-0">GET</span>
                  <div className="flex-1 h-2 rounded-full bg-indigo-100" />
                </div>
                <div className="animate-fade-in-up delay-300 flex items-center gap-3">
                  <span className="px-2 py-1 rounded-lg bg-indigo-500 text-white font-extrabold text-[10px] shrink-0">POST</span>
                  <span className="text-[10px] font-bold text-indigo-600">/api/screen</span>
                  <div className="flex-1 h-2 rounded-full bg-indigo-300" />
                </div>
                <div className="animate-fade-in-up delay-500 flex items-center gap-3">
                  <span className="px-2 py-1 rounded-lg bg-amber-100 text-amber-700 font-extrabold text-[10px] shrink-0">PUT</span>
                  <div className="flex-1 h-2 rounded-full bg-indigo-100" />
                </div>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Full JD & Resume Analysis</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Parse, score, and rank candidate resumes programmatically through the screening API.
              </p>
            </div>

            {/* Card 5: Candidate Ranking Tree */}
            <div className="card-shimmer animate-fade-in-up delay-400 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef2ff] to-[#f5f7ff] border border-[#e0e7ff] p-6 hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-500">
              <div className="flex flex-col items-center mb-6 pt-1">
                <div className="animate-float-y w-12 h-12 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-500/30 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="w-px h-4 bg-indigo-200 mb-1" />
                <div className="flex gap-5">
                  {['🥇', '🥈', '🥉'].map((medal, i) => (
                    <div key={i} className="flex flex-col items-center gap-0.5">
                      <div className="w-px h-4 bg-indigo-200" />
                      <div
                        className="animate-scale-in w-10 h-10 rounded-full bg-white border-2 border-indigo-100 shadow-md flex items-center justify-center text-lg"
                        style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                      >
                        {medal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">Dedicated Candidate Ranking</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                Automatically surfaces top-ranked candidates ordered by NLP relevance and keyword scores.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Section – Bento Grid */}
      <section className="py-24 px-6 bg-slate-50/30 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 max-w-xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
              Why Teams Choose RecruitAI
            </h2>
            <p className="text-slate-500 font-medium">
              Trusted by modern recruiting teams to find the best-fit candidates faster and with greater precision.
            </p>
          </div>

          {/* Bento Grid: 2-col layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* LEFT – tall hero stat card */}
            <div className="card-shimmer animate-fade-in-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 p-8 flex flex-col justify-between min-h-[340px] hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500">
              {/* Decorative background circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-16 -left-8 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

              {/* Icon */}
              <div className="animate-float-y w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              {/* Mini bar illustration */}
              <div className="flex items-end gap-2 mb-6">
                {[30, 50, 70, 90, 100].map((h, i) => (
                  <div
                    key={i}
                    className="animate-grow-up flex-1 rounded-t-lg bg-white/20"
                    style={{ height: `${h * 0.6}px`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Stat */}
              <div>
                <p className="text-6xl font-extrabold text-white tracking-tight mb-2">40%</p>
                <p className="text-white/70 text-sm font-semibold leading-relaxed max-w-xs">
                  Faster candidate ranking and screening cycles compared to manual methods.
                </p>
              </div>

              {/* Bottom badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-[11px] font-bold">Screening Speed</span>
              </div>
            </div>

            {/* RIGHT – 3 stacked smaller cards */}
            <div className="flex flex-col gap-5">

              {/* Card A: 3x throughput */}
              <div className="card-shimmer animate-fade-in-up delay-100 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef2ff] to-[#f5f7ff] border border-[#e0e7ff] p-6 hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-500 flex items-center gap-6">
                {/* Mini donut chart */}
                <div className="shrink-0 relative w-16 h-16">
                  <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#e0e7ff" strokeWidth="4" />
                    <circle cx="18" cy="18" r="14" fill="none" stroke="#6366f1" strokeWidth="4"
                      strokeDasharray="75 100" strokeLinecap="round" className="animate-[stroke_1s_ease-in-out]" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-indigo-600">3x</span>
                </div>
                <div>
                  <p className="text-3xl font-extrabold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-1">3x</p>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">Higher recruiter output and pipeline speed per hiring cycle.</p>
                </div>
              </div>

              {/* Card B: 100% Automated */}
              <div className="card-shimmer animate-fade-in-up delay-200 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f0f9ff] to-[#eef2ff] border border-[#dbeafe] p-6 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-500 flex items-center gap-6">
                {/* Checkmark visual */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center animate-scale-in delay-300">
                  <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-3xl font-extrabold bg-gradient-to-br from-emerald-500 to-teal-600 bg-clip-text text-transparent mb-1">100%</p>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">Automated skill checks and keyword match scoring on every resume.</p>
                </div>
              </div>

              {/* Card C: 10k+ processed */}
              <div className="card-shimmer animate-fade-in-up delay-300 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef2ff] to-[#f5f7ff] border border-[#e0e7ff] p-6 hover:shadow-xl hover:shadow-indigo-100/60 transition-all duration-500 flex items-center gap-6">
                {/* Stacked avatar dots */}
                <div className="shrink-0 flex -space-x-2">
                  {['#818cf8', '#6366f1', '#4f46e5', '#4338ca'].map((c, i) => (
                    <div
                      key={i}
                      className="animate-scale-in w-9 h-9 rounded-full border-2 border-white flex items-center justify-center"
                      style={{ backgroundColor: c, animationDelay: `${0.3 + i * 0.1}s` }}
                    >
                      <span className="text-white text-[9px] font-extrabold">CV</span>
                    </div>
                  ))}
                  <div className="animate-scale-in delay-700 w-9 h-9 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center">
                    <span className="text-indigo-600 text-[9px] font-extrabold">+k</span>
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-extrabold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-1">10k+</p>
                  <p className="text-slate-500 text-xs font-semibold leading-relaxed">Candidate profiles processed and ranked across all clients annually.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Easy Steps Section – Interactive */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-fade-in-up">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
              Get Started In Just 3 Easy Steps
            </h2>
            <p className="text-slate-500 font-medium">
              Click each step to see exactly how RecruitAI works in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* LEFT – animated preview panel (changes per active step) */}
            <div className="relative rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-100/60 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/60">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 tracking-wide">
                  {activeStep === 0 && 'Step 1 — Paste Job Description'}
                  {activeStep === 1 && 'Step 2 — Upload Resumes'}
                  {activeStep === 2 && 'Step 3 — Review Ranked Results'}
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Panel content – conditionally rendered */}
              <div className="p-6 min-h-[320px]">

                {/* Step 1: Job Description editor */}
                {activeStep === 0 && (
                  <div className="animate-fade-in-up space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-extrabold text-slate-700">Job Description Input</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-2">
                      <div className="h-2.5 rounded-full bg-slate-200 w-3/4" />
                      <div className="h-2.5 rounded-full bg-slate-200 w-full" />
                      <div className="h-2.5 rounded-full bg-slate-200 w-5/6" />
                      <div className="h-2.5 rounded-full bg-slate-200 w-2/3" />
                      <div className="h-2.5 rounded-full bg-slate-200 w-4/5" />
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['React', 'Node.js', 'TypeScript', 'REST API', 'Docker'].map((kw, i) => (
                        <span
                          key={kw}
                          className="animate-scale-in px-2.5 py-1 text-[10px] font-bold rounded-lg bg-violet-50 border border-violet-100 text-violet-700"
                          style={{ animationDelay: `${i * 0.08}s` }}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-bold text-emerald-600">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      5 keywords detected & ready for matching
                    </div>
                  </div>
                )}

                {/* Step 2: Resume dropzone */}
                {activeStep === 1 && (
                  <div className="animate-fade-in-up space-y-4">
                    <div className="border-2 border-dashed border-violet-200 rounded-2xl p-6 text-center bg-violet-50/30 hover:bg-violet-50/60 transition-colors cursor-pointer group">
                      <div className="animate-float-y w-12 h-12 mx-auto mb-3 bg-violet-100 rounded-xl flex items-center justify-center border border-violet-200">
                        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <p className="text-sm font-extrabold text-slate-800">Drag & drop resumes here</p>
                      <p className="text-xs text-slate-400 mt-1 font-semibold">PDF · DOCX · TXT accepted</p>
                    </div>
                    {/* Uploaded files list */}
                    <div className="space-y-2">
                      {['Shanu_Resume.pdf', 'Dipendra_CV.docx', 'Gautam_Profile.pdf'].map((f, i) => (
                        <div key={f} className="animate-fade-in-up flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100" style={{ animationDelay: `${i * 0.12}s` }}>
                          <div className="w-7 h-7 rounded-lg bg-violet-100 border border-violet-200 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <span className="text-xs font-bold text-slate-700 flex-1">{f}</span>
                          <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                            <div className="h-full bg-emerald-400 rounded-full animate-[width_1s_ease]" style={{ width: '100%' }} />
                          </div>
                          <span className="text-[10px] font-bold text-emerald-600">✓</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Ranked Results */}
                {activeStep === 2 && (
                  <div className="animate-fade-in-up space-y-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-slate-700">Ranked Candidates</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-extrabold text-emerald-600">3 Shortlisted</span>
                    </div>
                    {[
                      { name: 'Shanu', score: 94, color: 'from-emerald-400 to-teal-400', badge: '🥇' },
                      { name: 'Gautam', score: 78, color: 'from-indigo-400 to-violet-400', badge: '🥈' },
                      { name: 'Dipendra', score: 61, color: 'from-amber-400 to-orange-400', badge: '🥉' },
                    ].map((c, i) => (
                      <div
                        key={c.name}
                        className="animate-fade-in-up flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-100 hover:shadow-sm transition-all"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <span className="text-base">{c.badge}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-extrabold text-slate-800 truncate">{c.name}</span>
                            <span className="text-[10px] font-extrabold text-slate-500 ml-2">{c.score}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${c.color} animate-grow-up`}
                              style={{ width: `${c.score}%`, animationDelay: `${0.2 + i * 0.1}s` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT – clickable step cards */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 group ${activeStep === i
                    ? 'border-violet-200 bg-violet-50/50 shadow-lg shadow-violet-100/60'
                    : 'border-slate-100 bg-white shadow-sm hover:shadow-md hover:border-violet-100'
                    }`}
                >
                  {/* Step number bubble */}
                  <div className={`w-10 h-10 rounded-full font-extrabold text-xs flex items-center justify-center flex-shrink-0 transition-all duration-300 ${activeStep === i
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30 scale-110'
                    : 'bg-slate-100 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-600'
                    }`}>
                    {step.num}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className={`font-extrabold text-sm transition-colors duration-300 ${activeStep === i ? 'text-violet-700' : 'text-slate-900'
                      }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-semibold">{step.desc}</p>
                  </div>

                  {/* Active indicator */}
                  {activeStep === i && (
                    <div className="shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-1.5 animate-pulse" />
                  )}
                </button>
              ))}

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`rounded-full transition-all duration-300 ${activeStep === i
                      ? 'w-6 h-2 bg-violet-600'
                      : 'w-2 h-2 bg-slate-200 hover:bg-violet-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left sticky header */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[11px] font-bold tracking-wide uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                  FAQ
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-5">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                  Everything you need to know about RecruitAI. Can't find your answer?{' '}
                  <a href="#" className="text-violet-600 font-bold hover:underline">Contact us.</a>
                </p>

                {/* Mini CTA card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100">
                  <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center mb-4 shadow-md shadow-violet-500/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
                    </svg>
                  </div>
                  <p className="text-slate-800 font-extrabold text-sm mb-1">Still have questions?</p>
                  <p className="text-slate-500 text-xs font-medium mb-4">Our team is here to help you get started.</p>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-violet-600 hover:text-violet-700 transition-colors"
                  >
                    Talk to us →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-3 space-y-3">
              {[
                {
                  q: 'What file formats does RecruitAI support?',
                  a: 'RecruitAI supports PDF, DOCX, and TXT resume files. You can upload up to 20 resumes per screening session. Our parser automatically extracts structured text, candidate name, email, and key sections from all supported formats.',
                },
                {
                  q: 'How does the AI matching algorithm work?',
                  a: 'We use TF-IDF (Term Frequency–Inverse Document Frequency) vectorization combined with cosine similarity scoring. Your job description is analyzed for key terms, then each uploaded resume is scored 0–100% based on semantic and keyword overlap. Candidates are ranked highest to lowest automatically.',
                },
                {
                  q: 'Is there a limit on resumes per session?',
                  a: 'Each screening session supports up to 20 resumes simultaneously. For enterprise clients requiring bulk processing across hundreds of candidates, contact us to discuss our API integration options.',
                },
                {
                  q: 'How accurate is the candidate ranking?',
                  a: 'RecruitAI achieves high match precision by combining keyword frequency analysis with document structure awareness. While AI scoring is an excellent initial filter, we recommend combining it with human review for final hiring decisions. The model is continuously improving.',
                },
                {
                  q: 'Is my data secure and private?',
                  a: 'Absolutely. Uploaded resumes and job descriptions are processed in-memory and not stored persistently on our servers. We do not share or sell candidate data. All transmissions are encrypted via HTTPS.',
                },
                {
                  q: 'Can I use RecruitAI for free?',
                  a: 'Yes! RecruitAI offers a free tier that allows you to screen up to 5 resumes per session with full AI scoring. Sign in with the demo credentials to explore the dashboard without any setup.',
                },
              ].map((item, i) => (
                <FaqItem key={i} question={item.q} answer={item.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer className="bg-slate-950 text-slate-400">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand column */}
            <div className="md:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-md shadow-violet-500/20">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-white font-extrabold text-base tracking-tight">RecruitAI</span>
              </div>
              <p className="text-sm font-medium leading-relaxed max-w-xs mb-6">
                AI-powered resume screening that helps modern recruiting teams hire smarter, faster, and more accurately.
              </p>

              {/* Newsletter */}
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
                <button className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] mt-2 text-slate-600 font-medium">Get hiring tips & product updates. No spam.</p>
            </div>

            {/* Product links */}
            <div>
              <h4 className="text-white text-xs font-extrabold uppercase tracking-widest mb-5">Product</h4>
              <ul className="space-y-3 text-sm font-semibold">
                {['Features', 'How It Works', 'Pricing', 'API Docs', 'Changelog'].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors duration-200">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-white text-xs font-extrabold uppercase tracking-widest mb-5">Company</h4>
              <ul className="space-y-3 text-sm font-semibold">
                {['About Us', 'Blog', 'Careers', 'Privacy Policy', 'Terms of Service'].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors duration-200">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold text-slate-600">
              © 2026 RecruitAI · AI-Powered Resume Screening Portal · Built with ❤️ at Sparxx
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'GitHub', path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-violet-600 border border-slate-700 hover:border-violet-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-3.5 h-3.5 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
