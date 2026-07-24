import { ReactNode } from 'react'

interface StatCardProps {
  label: string
  value: string | number
  icon: ReactNode
  color?: 'purple' | 'emerald' | 'amber' | 'blue'
}

const colorMap = {
  purple: {
    icon: 'bg-violet-50 text-violet-600',
    value: 'text-slate-900',
  },
  emerald: {
    icon: 'bg-emerald-50 text-emerald-600',
    value: 'text-slate-900',
  },
  amber: {
    icon: 'bg-amber-50 text-amber-600',
    value: 'text-slate-900',
  },
  blue: {
    icon: 'bg-blue-50 text-blue-600',
    value: 'text-slate-900',
  },
}

export default function StatCard({ label, value, icon, color = 'purple' }: StatCardProps) {
  const styles = colorMap[color]
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-md hover:shadow-slate-100/40 transition-all duration-300 shadow-sm shadow-slate-100/50">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${styles.icon}`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{label}</p>
        <p className={`text-2xl font-black mt-0.5 ${styles.value}`}>{value}</p>
      </div>
    </div>
  )
}
