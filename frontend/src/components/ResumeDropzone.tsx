import { useCallback, useRef, useState } from 'react'

interface ResumeDropzoneProps {
  files: File[]
  onFilesChange: (files: File[]) => void
}

const ACCEPTED = ['.pdf', '.doc', '.docx', '.txt']
const MAX_SIZE_MB = 10

function isValidFile(file: File) {
  const ext = '.' + file.name.split('.').pop()?.toLowerCase()
  return ACCEPTED.includes(ext) && file.size <= MAX_SIZE_MB * 1024 * 1024
}

export default function ResumeDropzone({ files, onFilesChange }: ResumeDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const addFiles = useCallback((incoming: File[]) => {
    const valid = incoming.filter(isValidFile)
    const existing = new Set(files.map((f) => f.name))
    const deduped = valid.filter((f) => !existing.has(f.name))
    onFilesChange([...files, ...deduped])
  }, [files, onFilesChange])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    addFiles([...e.dataTransfer.files])
  }, [addFiles])

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true) }
  const onDragLeave = () => setIsDragging(false)

  const removeFile = (name: string) =>
    onFilesChange(files.filter((f) => f.name !== name))

  const formatSize = (bytes: number) =>
    bytes < 1024 * 1024
      ? `${(bytes / 1024).toFixed(0)} KB`
      : `${(bytes / (1024 * 1024)).toFixed(1)} MB`

  const getFileIcon = (name: string) => {
    const ext = name.split('.').pop()?.toLowerCase()
    if (ext === 'pdf') return '📄'
    if (ext === 'docx' || ext === 'doc') return '📝'
    return '📃'
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-bold text-slate-800">Upload Resumes</label>

      {/* Drop Zone */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-200 ${
          isDragging
            ? 'border-violet-500 bg-violet-50/50 scale-[1.01]'
            : 'border-slate-200 bg-slate-50/30 hover:border-violet-500/80 hover:bg-slate-50/60'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          onChange={(e) => addFiles([...(e.target.files || [])])}
        />

        <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>

        <p className="text-slate-800 font-bold mb-1">
          {isDragging ? 'Drop files here' : 'Drag & drop resumes'}
        </p>
        <p className="text-slate-500 text-sm">
          or <span className="text-violet-600 font-bold">browse files</span>
        </p>
        <p className="text-slate-400 text-xs mt-2 font-medium">
          PDF, DOCX, TXT · Max {MAX_SIZE_MB}MB per file
        </p>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            {files.length} file{files.length !== 1 ? 's' : ''} selected
          </p>
          {files.map((file) => (
            <div
              key={file.name}
              className="flex items-center justify-between px-4 py-3 bg-white border border-slate-100 rounded-xl group hover:border-slate-200 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xl">{getFileIcon(file.name)}</span>
                <div className="min-w-0">
                  <p className="text-slate-800 text-sm font-semibold truncate">{file.name}</p>
                  <p className="text-slate-400 text-xs font-medium">{formatSize(file.size)}</p>
                </div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); removeFile(file.name) }}
                className="ml-3 flex-shrink-0 w-7 h-7 rounded-lg bg-slate-50 group-hover:bg-red-50 text-slate-400 hover:text-red-600 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
