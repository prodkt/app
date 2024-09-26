import type * as React from 'react'

import {
  AlertCircle,
  Ban,
  SignalHigh,
  SignalLow,
  SignalMedium,
} from 'lucide-react'

import { cn } from '@/utils/cn'

type TIssuePriorities = 'urgent' | 'high' | 'medium' | 'low' | 'none'

interface IPriorityIcon {
  className?: string
  containerClassName?: string
  priority: TIssuePriorities
  size?: number
  withContainer?: boolean
}

export const PriorityIcon: React.FC<IPriorityIcon> = (props) => {
  const {
    priority,
    className = '',
    containerClassName = '',
    size = 14,
    withContainer = false,
  } = props

  const priorityClasses = {
    urgent: 'bg-red-9 text-red-5 border-red-6',
    high: 'bg-orange-a6 text-orange-9 border-orange-5',
    medium: 'bg-yellow-a6 text-yellow-9 border-yellow-5',
    low: 'bg-[var(--grayA2)] text-[var(--grayA12)] border-[var(--grayA4)]',
    none: 'bg-[var(--grayA2)] text-[var(--grayA12)] border-[var(--grayA4)]',
  }

  // get priority icon
  const icons = {
    urgent: AlertCircle,
    high: SignalHigh,
    medium: SignalMedium,
    low: SignalLow,
    none: Ban,
  }
  const Icon = icons[priority]

  if (!Icon) return null

  return (
    <>
      {withContainer ? (
        <div
          className={cn(
            'flex items-center justify-center border rounded p-0.5 flex-shrink-0',
            priorityClasses[priority],
            containerClassName,
          )}
        >
          <Icon
            size={size}
            className={cn(
              {
                'text-[var(--grayA12)]': priority === 'urgent',
                // centre align the icons
                'translate-x-[0.0625rem]': priority === 'high',
                'translate-x-0.5': priority === 'medium',
                'translate-x-1': priority === 'low',
              },
              className,
            )}
          />
        </div>
      ) : (
        <Icon
          size={size}
          className={cn(
            'flex-shrink-0',
            {
              'text-red-9': priority === 'urgent',
              'text-orange-9': priority === 'high',
              'text-yellow-9': priority === 'medium',
              'text-custom-primary-1': priority === 'low',
              'text-custom-text-2': priority === 'none',
            },
            className,
          )}
        />
      )}
    </>
  )
}
