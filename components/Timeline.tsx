import { ReactNode } from 'react'

interface TimelineProps {
  children: ReactNode
}

export const Timeline = ({ children }: TimelineProps) => (
  <div className="relative">{children}</div>
)

interface TimelineMarkerProps {
  showLine?: boolean
}

export const TimelineMarker = ({ showLine = true }: TimelineMarkerProps) => (
  <>
    {showLine && (
      <div
        className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700"
        aria-hidden="true"
      />
    )}
    <div
      className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-slate-600 bg-slate-900 group-hover/item:border-blue-500/50 group-hover/item:bg-slate-800 transition-colors"
      aria-hidden="true"
    />
  </>
)

interface TimelineEntryProps {
  children: ReactNode
  className?: string
}

export const TimelineEntry = ({ children, className = '' }: TimelineEntryProps) => (
  <div className={`relative pl-8 group/item ${className}`}>
    <TimelineMarker />
    {children}
  </div>
)
