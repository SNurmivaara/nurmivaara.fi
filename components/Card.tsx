import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md'
}

export const Card = ({ children, className = '', padding = 'md' }: CardProps) => {
  const paddingClass = padding === 'sm' ? 'p-4' : 'p-5'

  return (
    <div
      className={`bg-slate-800/30 border border-slate-700/50 rounded-lg ${paddingClass} hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  )
}

interface BadgeProps {
  children: ReactNode
  variant?: 'skill' | 'highlight'
}

export const Badge = ({ children, variant = 'skill' }: BadgeProps) => {
  const baseClasses = 'px-2 py-1 rounded text-xs'

  const variantClasses =
    variant === 'highlight'
      ? 'px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-md text-sm'
      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-slate-200 transition-colors cursor-default'

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>
}

interface BadgeListProps {
  items: string[]
  variant?: 'skill' | 'highlight'
}

export const BadgeList = ({ items, variant = 'skill' }: BadgeListProps) => (
  <div className="flex flex-wrap gap-1.5">
    {items.map((item) => (
      <Badge key={item} variant={variant}>
        {item}
      </Badge>
    ))}
  </div>
)
