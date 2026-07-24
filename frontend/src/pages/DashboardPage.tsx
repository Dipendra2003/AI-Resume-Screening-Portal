import { useState } from 'react'
import JobDescriptionForm from '../components/JobDescriptionForm'
import ResumeDropzone from '../components/ResumeDropzone'
import CandidateTable from '../components/CandidateTable'
import type { Candidate } from '../components/CandidateTable'
import StatCard from '../components/StatCard'

type Step = 'input' | 'processing' | 'results'

interface ScreeningResult {
  candidates: Candidate[]
  totalScanned: number
  shortlisted: number
  avgScore: number
}

export default function DashboardPage() {
  const [step, setStep] = useState<Step>('input')
  const [jobDescription, setJobDescription] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [result, setResult] = useState<ScreeningResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const canSubmit = jobDescription.trim().length >= 50 && files.length > 0

  const handleScreen = async () => {
    setError(null)
    setStep('processing')

    const formData = new FormData()
    formData.append('jobDescription', jobDescription)
    files.forEach((f) => formData.append('resumes', f))

    try {
      const res = await fetch('/api/screen', { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Screening failed')
      setResult(data)
      setStep('results')
    } catch (err: any) {
      setError(err.message)
      setStep('input')
    }
  }

  const handleReset = () => {
    setStep('input')
    setJobDescription('')
    setFiles([])
    setResult(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[400px] pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Recruiter Workspace</h1>
          <p className="text-slate-500 font-medium mt-1">AI-powered resume screening and candidate ranking</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 mb-10 overflow-x-auto pb-2">
          {[
            { key: 'input', label: 'Setup' },
            { key: 'processing', label: 'Analyzing' },
            { key: 'results', label: 'Results' },
          ].map((s, i) => {
            const isActive = s.key === step
            const isDone = (step === 'processing' && i === 0) || (step === 'results' && i <= 1)
            return (
              <div key={s.key} className="flex items-center flex-shrink-0">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                  isActive ? 'bg-violet-50 text-violet-600 border-violet-100 shadow-sm shadow-violet-500/5' :
                  isDone ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-white text-slate-400 border-slate-100 shadow-sm'
                }`}>
                  {isDone ? (
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center border font-extrabold ${
                      isActive ? 'border-violet-300 text-violet-600' : 'border-slate-200 text-slate-400'
                    }`}>{i + 1}</span>
                  )}
                  {s.label}
                </div>
                {i < 2 && <div className="w-8 h-px bg-slate-200 mx-2" />}
              </div>
            )
          })}
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 flex items-start gap-3 px-5 py-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* ── INPUT STEP ─────────────────────────────────── */}
        {step === 'input' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* JD Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm shadow-slate-100/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center text-sm font-extrabold">1</div>
                <h2 className="font-extrabold text-slate-800">Job Description</h2>
              </div>
              <JobDescriptionForm value={jobDescription} onChange={setJobDescription} />
            </div>

            {/* Upload Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm shadow-slate-100/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 border border-violet-100 flex items-center justify-center text-sm font-extrabold">2</div>
                <h2 className="font-extrabold text-slate-800">Upload Resumes</h2>
              </div>
              <ResumeDropzone files={files} onFilesChange={setFiles} />
            </div>

            {/* Submit Bar */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-sm font-medium text-slate-500">
                {!canSubmit && (
                  <span>
                    {jobDescription.trim().length < 50 ? '⚠ Job description needs at least 50 characters. ' : ''}
                    {files.length === 0 ? '⚠ Upload at least one resume.' : ''}
                  </span>
                )}
                {canSubmit && (
                  <span className="text-emerald-600 font-bold">✓ Ready — {files.length} resume{files.length !== 1 ? 's' : ''} queued for analysis</span>
                )}
              </div>
              <button
                onClick={handleScreen}
                disabled={!canSubmit}
                className="px-8 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all hover:scale-[1.02] active:scale-95 shadow-md shadow-violet-500/10 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Run AI Screening
              </button>
            </div>
          </div>
        )}

        {/* ── PROCESSING STEP ─────────────────────────────── */}
        {step === 'processing' && (
          <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center shadow-sm shadow-slate-100/50 flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative w-20 h-20 mb-8">
              <div className="absolute inset-0 rounded-full border-4 border-violet-100" />
              <div className="absolute inset-0 rounded-full border-4 border-t-violet-600 animate-spin" />
              <div className="absolute inset-2.5 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center">
                <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-black text-slate-800 mb-2">Analyzing Resumes</h2>
            <p className="text-slate-500 font-medium max-w-sm text-sm sm:text-base leading-relaxed">
              Parsing files, generating TF-IDF keyword vectors, and calculating candidate relevance scores...
            </p>
            <div className="mt-8 flex gap-2 flex-wrap justify-center">
              {['Parsing Docx/Pdf', 'NLP Vectorizing', 'Cosine Similarity', 'Ranking Shortlist'].map((stage, i) => (
                <span
                  key={stage}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-500 border border-slate-100 animate-pulse"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── RESULTS STEP ─────────────────────────────────── */}
        {step === 'results' && result && (
          <div className="space-y-6">
            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                label="Total Scanned"
                value={result.totalScanned}
                color="blue"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              />
              <StatCard
                label="Shortlisted"
                value={result.shortlisted}
                color="emerald"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
              <StatCard
                label="Avg Match Score"
                value={`${result.avgScore}%`}
                color="amber"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
              />
              <StatCard
                label="Top Score"
                value={`${result.candidates[0]?.score ?? 0}%`}
                color="purple"
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                }
              />
            </div>

            {/* Candidate Table */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm shadow-slate-100/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-extrabold text-slate-850 text-lg">Ranked Candidates</h2>
                  <p className="text-slate-450 text-xs font-semibold mt-0.5">Click a row to expand matched keywords</p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 hover:text-slate-700 hover:bg-slate-100 text-sm font-bold transition-all shadow-sm"
                >
                  ← New Session
                </button>
              </div>
              <CandidateTable candidates={result.candidates} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
