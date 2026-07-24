import { useState } from 'react'
import ScoreBadge from './ScoreBadge'

export interface Candidate {
  rank: number
  name: string
  filename: string
  score: number
  matchedKeywords: string[]
  status: 'Shortlisted' | 'Under Review'
}

interface CandidateTableProps {
  candidates: Candidate[]
}

type SortKey = 'rank' | 'score' | 'name'
type SortDir = 'asc' | 'desc'

export default function CandidateTable({ candidates }: CandidateTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rank')
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [filter, setFilter] = useState<'all' | 'Shortlisted' | 'Under Review'>('all')
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const sorted = [...candidates]
    .filter((c) => filter === 'all' || c.status === filter)
    .sort((a, b) => {
      let diff = 0
      if (sortKey === 'rank') diff = a.rank - b.rank
      else if (sortKey === 'score') diff = a.score - b.score
      else diff = a.name.localeCompare(b.name)
      return sortDir === 'asc' ? diff : -diff
    })

  const SortIcon = ({ col }: { col: SortKey }) => (
    <span className={`ml-1 text-xs transition-opacity ${sortKey === col ? 'opacity-100' : 'opacity-30'}`}>
      {sortKey === col ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
    </span>
  )

  return (
    <div className="space-y-4">
      {/* Filter tabs */}
      <div className="flex items-center gap-2">
        {(['all', 'Shortlisted', 'Under Review'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all capitalize border ${
              filter === f
                ? 'bg-violet-50 text-violet-600 border-violet-200'
                : 'bg-white text-slate-500 border-slate-100 hover:bg-slate-50 hover:text-slate-700 shadow-sm'
            }`}
          >
            {f === 'all' ? `All (${candidates.length})` : f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th
                className="px-4 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-800 transition-colors select-none"
                onClick={() => toggleSort('rank')}
              >
                Rank <SortIcon col="rank" />
              </th>
              <th
                className="px-4 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-800 transition-colors select-none"
                onClick={() => toggleSort('name')}
              >
                Candidate <SortIcon col="name" />
              </th>
              <th
                className="px-4 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-800 transition-colors select-none"
                onClick={() => toggleSort('score')}
              >
                Match Score <SortIcon col="score" />
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                Keywords
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {sorted.map((c) => {
              const isExpanded = expandedRow === c.filename
              return (
                <>
                  <tr
                    key={c.filename}
                    onClick={() => setExpandedRow(isExpanded ? null : c.filename)}
                    className={`cursor-pointer transition-colors ${
                      isExpanded
                        ? 'bg-violet-50/20'
                        : 'hover:bg-slate-50/30'
                    }`}
                  >
                    {/* Rank */}
                    <td className="px-4 py-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold ${
                        c.rank === 1 ? 'bg-amber-100 text-amber-800' :
                        c.rank === 2 ? 'bg-slate-100 text-slate-700' :
                        c.rank === 3 ? 'bg-orange-100 text-orange-800' :
                        'bg-slate-50 text-slate-500'
                      }`}>
                        {c.rank === 1 ? '🥇' : c.rank === 2 ? '🥈' : c.rank === 3 ? '🥉' : `#${c.rank}`}
                      </div>
                    </td>

                    {/* Candidate */}
                    <td className="px-4 py-4">
                      <p className="text-slate-900 font-bold">{c.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5 truncate max-w-[180px] font-medium">{c.filename}</p>
                    </td>

                    {/* Score */}
                    <td className="px-4 py-4">
                      <ScoreBadge score={c.score} />
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${
                        c.status === 'Shortlisted'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                          : 'bg-amber-50 text-amber-700 border-amber-100'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${c.status === 'Shortlisted' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        {c.status}
                      </span>
                    </td>

                    {/* Keywords preview */}
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1 max-w-[220px]">
                        {c.matchedKeywords.slice(0, 3).map((kw) => (
                          <span key={kw} className="px-2 py-0.5 rounded-md text-xs font-semibold bg-violet-50 text-violet-600 border border-violet-100">
                            {kw}
                          </span>
                        ))}
                        {c.matchedKeywords.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-500">
                            +{c.matchedKeywords.length - 3}
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>

                  {/* Expanded row */}
                  {isExpanded && (
                    <tr key={`${c.filename}-expanded`} className="bg-violet-50/10">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">All Matched Keywords</p>
                          <div className="flex flex-wrap gap-2">
                            {c.matchedKeywords.length > 0
                              ? c.matchedKeywords.map((kw) => (
                                  <span key={kw} className="px-3 py-1 rounded-lg text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100/80">
                                    ✓ {kw}
                                  </span>
                                ))
                              : <span className="text-slate-400 text-sm font-medium">No strong keyword matches found</span>
                            }
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              )
            })}
          </tbody>
        </table>

        {sorted.length === 0 && (
          <div className="py-12 text-center text-slate-400 font-medium">
            No candidates match this filter
          </div>
        )}
      </div>
    </div>
  )
}
