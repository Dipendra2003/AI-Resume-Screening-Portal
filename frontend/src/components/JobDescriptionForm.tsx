interface JobDescriptionFormProps {
  value: string
  onChange: (val: string) => void
}

const CHAR_LIMIT = 5000

export default function JobDescriptionForm({ value, onChange }: JobDescriptionFormProps) {
  const remaining = CHAR_LIMIT - value.length
  const isNearLimit = remaining < 500

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-bold text-slate-800">
          Job Description
        </label>
        <span className={`text-xs font-semibold tabular-nums ${isNearLimit ? 'text-amber-600' : 'text-slate-400'}`}>
          {remaining.toLocaleString()} chars left
        </span>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, CHAR_LIMIT))}
        placeholder="Paste the job description here... Include required skills, responsibilities, qualifications, and any other relevant details for accurate AI matching."
        rows={10}
        className="w-full bg-slate-50/30 border border-slate-200 rounded-2xl p-4 text-slate-800 placeholder-slate-400 text-sm leading-relaxed resize-none focus:outline-none focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all duration-200"
      />

      {value.trim().length > 0 && (
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Job description added ({value.trim().split(/\s+/).length} words)
        </div>
      )}
    </div>
  )
}
