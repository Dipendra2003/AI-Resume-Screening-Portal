interface ScoreBadgeProps {
  score: number
}

export default function ScoreBadge({ score }: ScoreBadgeProps) {
  const getStyle = () => {
    if (score >= 75) return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    if (score >= 50) return 'bg-amber-50 text-amber-700 border-amber-200'
    return 'bg-red-50 text-red-700 border-red-200'
  }

  const getBarColor = () => {
    if (score >= 75) return 'bg-emerald-500'
    if (score >= 50) return 'bg-amber-500'
    return 'bg-red-500'
  }

  return (
    <div className="flex items-center gap-3 min-w-[140px]">
      {/* Progress bar */}
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${getBarColor()}`}
          style={{ width: `${score}%` }}
        />
      </div>
      {/* Badge */}
      <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border tabular-nums ${getStyle()}`}>
        {score}%
      </span>
    </div>
  )
}
