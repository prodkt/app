/* eslint-disable security/detect-object-injection */

import * as React from 'react'

import { Button } from '@/primitives/button'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/primitives/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/primitives/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/primitives/tooltip'
import { Kbd } from '@/prodkt-components/kbd'
import { cn } from '@/utils/cn'

import { CheckIcon } from './icons/check'
import { HighIcon } from './icons/high'
import { LowIcon } from './icons/low'
import { MediumIcon } from './icons/medium'
import { NoPriorityIcon } from './icons/no-priority'
import { UrgentIcon } from './icons/urgent'

interface SVGRProps {
  title?: string
  titleId?: string
  desc?: string
  descId?: string
}

type IconComponent = React.FC<React.SVGProps<SVGSVGElement> & SVGRProps>

interface IssuePriorityProps {
  defaultPriority?: string // Accept default priority as a prop
  disableShortcut?: boolean
}
interface Priority {
  value: string
  label: string
  icon: IconComponent
}

const priorities: readonly Priority[] = [
  { value: 'no-priority', label: 'No priority', icon: NoPriorityIcon },
  { value: 'urgent', label: 'Urgent', icon: UrgentIcon },
  { value: 'high', label: 'High', icon: HighIcon },
  { value: 'medium', label: 'Medium', icon: MediumIcon },
  { value: 'low', label: 'Low', icon: LowIcon },
]

export const IssuePriority: React.FC<IssuePriorityProps> = ({
  defaultPriority,
  disableShortcut,
}) => {
  const [openPopover, setOpenPopover] = React.useState(false)
  const [openTooltip, setOpenTooltip] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  // Set the initial priority based on the passed prop or fallback to 'no-priority'
  // Set the initial priority based on the passed prop or fallback to 'no-priority'
  const initialPriority: Priority | null =
    priorities.find((p) => p.value === defaultPriority) ?? null
  const [selectedPriority, setSelectedPriority] =
    React.useState<Priority | null>(initialPriority)

  // Conditionally set up the hotkey only if not disabled
  React.useEffect(() => {
    if (disableShortcut) return

    const handleHotkey = (event: KeyboardEvent) => {
      if (event.key === 'p') {
        // Assuming 'p' is the key for opening the dropdown
        setOpenTooltip(false)
        setOpenPopover(true)
      }
    }

    window.addEventListener('keydown', handleHotkey)
    return () => {
      window.removeEventListener('keydown', handleHotkey)
    }
  }, [disableShortcut])

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <TooltipProvider>
        <Tooltip
          delayDuration={500}
          open={openTooltip}
          onOpenChange={setOpenTooltip}
        >
          <TooltipTrigger asChild>
            <PopoverTrigger asChild>
              <Button
                aria-label='Set priority'
                variant='ghost'
                size='sm'
                className='flex h-6 select-none flex-row items-center justify-center gap-1 rounded-md border px-1 py-0.5 text-xs hover:bg-opacity-0 hover:text-[var(--grayA12)] group-hover:bg-[var(--grayA1)]'
              >
                {selectedPriority &&
                selectedPriority.value !== 'no-priority' ? (
                  <>
                    {selectedPriority.icon && (
                      <selectedPriority.icon
                        className={cn(
                          'size-4',
                          selectedPriority.value !== 'urgent' && 'fill-primary',
                        )}
                        aria-hidden='true'
                      />
                    )}
                    {selectedPriority.label}
                  </>
                ) : (
                  <>
                    <NoPriorityIcon
                      className='size-4 text-[var(--gray9)]'
                      aria-hidden='true'
                      title='Set priority'
                    />
                    Set priority
                  </>
                )}
              </Button>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent
            hideWhenDetached
            side='bottom'
            align='start'
            sideOffset={6}
            className='flex h-8 items-center gap-2 border bg-background px-2 text-xs'
          >
            <span className=''>Change priority</span>
            <Kbd abbrTitle='P'>P</Kbd>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <PopoverContent
        className='w-[206px] rounded-lg p-0'
        align='start'
        onCloseAutoFocus={(e) => {
          e.preventDefault()
        }}
        sideOffset={6}
      >
        <Command className='rounded-lg'>
          <CommandInput
            value={searchValue}
            onValueChange={(searchValue) => {
              const idx = Number.parseInt(searchValue)
              if (idx >= 0 && idx < priorities.length) {
                setSelectedPriority(priorities[idx] ?? null)
                setOpenTooltip(false)
                setOpenPopover(false)
                setSearchValue('')
                return
              }
              setSearchValue(searchValue)
            }}
            className='text-[0.8125rem] leading-normal'
            placeholder='Set priority'
          />
          <CommandList>
            <CommandGroup>
              {priorities.map((priority) => (
                <CommandItem
                  key={priority.value}
                  value={priority.value || ''}
                  onSelect={(value) => {
                    const foundPriority = priorities.find(
                      (p) => p.value === value,
                    )
                    setSelectedPriority(foundPriority ?? null)
                    setOpenTooltip(false)
                    setOpenPopover(false)
                    setSearchValue('')
                  }}
                  className='group flex w-full items-center justify-between rounded-md text-[0.8125rem] leading-normal'
                >
                  <div className='flex items-center'>
                    <priority.icon
                      title={priority.label}
                      className='mr-2 size-4 fill-muted-foreground group-hover:fill-primary'
                    />
                    <span>{priority.label}</span>
                  </div>
                  <div className='flex items-center'>
                    {selectedPriority?.value === priority.value && (
                      <CheckIcon
                        title='Check'
                        className='mr-3 size-4 fill-muted-foreground group-hover:fill-primary'
                      />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
