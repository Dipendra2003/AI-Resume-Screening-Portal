import { Link } from 'react-router-dom'

const logos = ['IPSUM', 'Legalipsum', 'Lumina', 'LOGOTYPE']

const features = [
  {
    title: 'Smart Resume Parsing',
    desc: 'Automatically extracts and analyzes raw text content from PDF and DOCX formats with high accuracy.',
    badge: 'Step 1',
  },
  {
    title: 'Automated Workflows',
    desc: 'Automates applicant tracking by screening uploaded resumes instantly upon upload.',
    badge: 'Step 2',
  },
  {
    title: 'Match & Rank Engine',
    desc: 'Ranks and filters candidates based on custom NLP similarity score calculations.',
    badge: 'Step 3',
  },
]

const whyChoose = [
  { val: '80%', desc: 'Reduction in manual screening time per job description.' },
  { val: '3x', desc: 'Increase in candidate sourcing and screening throughput.' },
  { val: '100%', desc: 'Automated keyword matching and skill indexing.' },
  { val: '10k+', desc: 'Resumes processed efficiently without performance lag.' },
]

const steps = [
  { num: '01', title: 'Simple And Fast Setup', desc: 'Paste your target job description to establish the screening baseline.' },
  { num: '02', title: 'Upload Resumes Effortlessly', desc: 'Drag and drop up to 20 candidate resumes in PDF or DOCX formats.' },
  { num: '03', title: 'Review Ranked Shortlist', desc: 'Instantly view candidates ranked by NLP relevance scores with keywords.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-16">
      {/* Background clouds / blurs */}
      <div className="absolute top-0 inset-x-0 h-[720px] pointer-events-none overflow-hidden z-0 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white">
        {/* Sky-Blue Glow */}
        <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[40vw] bg-[#e0f2fe]/40 rounded-full blur-[130px]" />
        
        {/* Soft Violet/Purple Glow */}
        <div className="absolute top-[-5%] right-[10%] w-[45vw] h-[35vw] bg-violet-100/50 rounded-full blur-[110px]" />
        
        {/* Fluffy white cloud shapes */}
        <div className="absolute top-[20%] left-[-5%] w-[450px] h-[250px] bg-white/90 rounded-full blur-[75px]" />
        <div className="absolute top-[15%] right-[-5%] w-[500px] h-[300px] bg-white/95 rounded-full blur-[85px]" />
        <div className="absolute top-[35%] left-[25%] w-[650px] h-[250px] bg-white/80 rounded-full blur-[95px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-xs font-bold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            AI Resume Screening
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Simplify Resume Screening<br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Boost Hiring Efficiency
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Easily manage candidates and enhance productivity from start to finish. Paste your JD,
            upload candidate resumes, and let NLP identify the best fits instantly.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Link
              to="/dashboard"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg shadow-violet-500/20 hover:scale-[1.02] active:scale-95"
            >
              Get Started Free
            </Link>
            <Link
              to="/dashboard"
              className="px-6 py-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all shadow-sm hover:scale-[1.02]"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Floating Mockup area */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Floating tags */}
          <span className="hidden sm:inline-block absolute -top-8 left-12 px-3 py-1.5 bg-white border border-slate-100 rounded-full shadow-md text-xs font-bold text-slate-700 hover:scale-105 transition-transform">
            🔍 AI Evaluator
          </span>
          <span className="hidden sm:inline-block absolute -top-12 right-20 px-3 py-1.5 bg-white border border-slate-100 rounded-full shadow-md text-xs font-bold text-slate-700 hover:scale-105 transition-transform">
            ⚡ Quick Screening
          </span>
          <span className="hidden sm:inline-block absolute bottom-12 -left-12 px-3 py-1.5 bg-white border border-slate-100 rounded-full shadow-md text-xs font-bold text-slate-700 hover:scale-105 transition-transform">
            📊 Rank Reports
          </span>

          {/* Mock Dashboard Frame */}
          <div className="rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-violet-600" />
                <span className="font-bold text-slate-800 text-sm">Recruiter Workspace</span>
              </div>
              <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-lg">Active Session</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'To Screen', count: '12 Resumes', border: 'border-slate-100' },
                { title: 'In Process', count: '4 Running', border: 'border-slate-100' },
                { title: 'Shortlisted', count: '3 Candidates', border: 'border-violet-100 bg-violet-50/20' },
              ].map((item) => (
                <div key={item.title} className={`p-4 rounded-2xl border ${item.border}`}>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</p>
                  <p className="text-lg font-extrabold text-slate-800 mt-1">{item.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor/Logo Cloud */}
        <div className="max-w-4xl mx-auto mt-20">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by hiring managers and recruitment teams
          </p>
          <div className="flex flex-wrap items-center justify-between gap-6 px-8 py-5 border border-slate-100 rounded-2xl bg-slate-50/50">
            {logos.map((logo) => (
              <span key={logo} className="text-slate-400 font-extrabold tracking-wider text-sm sm:text-base">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-24 px-6 bg-slate-50/30 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
              Unlock Premium Benefits With Our Advanced Features
            </h2>
            <p className="text-slate-500 font-medium text-sm sm:text-base">
              Scale your resume screening pipelines using advanced NLP tools built for maximum speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-slate-100/60 transition-all duration-300 shadow-sm"
              >
                <span className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold bg-violet-50 text-violet-600 border border-violet-100 mb-4">
                  {f.badge}
                </span>
                <h3 className="font-extrabold text-slate-900 mb-2 text-base group-hover:text-violet-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
              Why Teams Choose RecruitAI
            </h2>
            <p className="text-slate-500 font-medium">
              Trust RecruitAI to screen candidates and rank top matches efficiently.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {whyChoose.map((w) => (
              <div
                key={w.val}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-100 hover:border-violet-100 shadow-sm"
              >
                <p className="text-4xl font-extrabold bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  {w.val}
                </p>
                <p className="text-slate-500 text-xs font-semibold mt-3 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Easy Steps */}
      <section className="py-24 px-6 bg-slate-50/30 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
              Get Started In Just 3 Easy Steps
            </h2>
            <p className="text-slate-500 font-medium">
              Get started in just 3 easy steps with a guided screening workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Mock upload panel */}
            <div className="p-6 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-100/50">
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50/20">
                <div className="w-12 h-12 mx-auto mb-3 bg-violet-50 rounded-xl flex items-center justify-center border border-violet-100">
                  <span className="text-violet-600 font-bold">↑</span>
                </div>
                <p className="text-sm font-bold text-slate-800">Drag & drop files here</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">PDF, DOCX, TXT files accepted</p>
              </div>
            </div>

            {/* Right Column: Steps list */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-violet-600 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm">{step.title}</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-10 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-950 via-slate-900 to-slate-900 opacity-60" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-4">Real Results, Real Impact.</h2>
              <p className="text-slate-400 font-medium mb-8 max-w-md mx-auto">
                Join modern recruitment teams and scale your resume scoring productivity today.
              </p>
              <Link
                to="/dashboard"
                className="inline-block px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/20 active:scale-95"
              >
                Open Recruiter Workspace →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 px-6 text-center text-slate-400 text-xs font-bold uppercase tracking-wider bg-slate-50/50">
        <p>© 2026 RecruitAI · AI-Powered Resume Screening Portal</p>
      </footer>
    </div>
  )
}
