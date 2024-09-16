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

import { CheckIcon } from './icons/check'
import { NoPriorityIcon } from './icons/no-priority'

interface IssueLabelProps {
  defaultLabel?: string // Accept default label as a prop
  disableShortcut?: boolean
}

interface Label {
  value: string
  label: string
  color: string // This should be a valid color name or hex code
}

const labels: readonly Label[] = [
  { value: 'feature', label: 'Feature', color: 'indigo' },
  { value: 'bug', label: 'Bug', color: 'red' },
  { value: 'design', label: 'Design', color: 'gray' },
  { value: 'feedback', label: 'Feedback', color: 'mint' },
  { value: 'improvement', label: 'Improvement', color: 'orange' },
  { value: 'infrastructure', label: 'Infrastructure', color: 'blue' },
  { value: 'marketing', label: 'Marketing', color: 'pink' },
  { value: 'security', label: 'Security', color: 'mint' },
]

export const IssueLabel: React.FC<IssueLabelProps> = ({
  defaultLabel,
  disableShortcut,
}) => {
  const [openPopover, setOpenPopover] = React.useState(false)
  const [openTooltip, setOpenTooltip] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  // Set the initial label based on the passed prop or fallback to 'no-label'
  const initialLabel: Label | null =
    labels.find((p) => p.value === defaultLabel) ?? null
  const [selectedLabel, setSelectedLabel] = React.useState<Label | null>(
    initialLabel,
  )

  // Conditionally set up the hotkey only if not disabled
  React.useEffect(() => {
    if (disableShortcut) return

    const handleHotkey = (event: KeyboardEvent) => {
      if (event.key === 'l') {
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
                aria-label='Set label'
                variant='ghost'
                size='sm'
                className='flex h-6 select-none flex-row items-center justify-center gap-1 rounded-md border px-1 py-0.5 text-xs hover:bg-opacity-0 hover:text-[var(--grayA12)] group-hover:bg-[var(--grayA1)]'
              >
                {selectedLabel && selectedLabel.value !== 'no-label' ? (
                  <>
                    <div
                      style={{
                        backgroundColor: `var(--${selectedLabel.color}9)`,
                      }}
                      className='size-3 rounded'
                      aria-hidden='true'
                    />
                    {selectedLabel.label}
                  </>
                ) : (
                  <>
                    <NoPriorityIcon
                      className='size-4 text-[var(--gray9)]'
                      aria-hidden='true'
                      title='Set label'
                    />
                    Set label
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
            <span className=''>Change label</span>
            <Kbd abbrTitle='L'>L</Kbd>
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
              if (idx >= 0 && idx < labels.length) {
                setSelectedLabel(labels[idx] ?? null)
                setOpenTooltip(false)
                setOpenPopover(false)
                setSearchValue('')
                return
              }
              setSearchValue(searchValue)
            }}
            className='text-[0.8125rem] leading-normal'
            placeholder='Set label'
          />
          <CommandList>
            <CommandGroup>
              {labels.map((label) => (
                <CommandItem
                  key={label.value}
                  value={label.value || ''}
                  onSelect={(value) => {
                    const foundLabel = labels.find((p) => p.value === value)
                    setSelectedLabel(foundLabel ?? null)
                    setOpenTooltip(false)
                    setOpenPopover(false)
                    setSearchValue('')
                  }}
                  className='group flex w-full items-center justify-between rounded-md text-[0.8125rem] leading-normal'
                >
                  <div className='flex items-center'>
                    <div
                      style={{ backgroundColor: `var(--${label.color}9)` }}
                      className='mr-2 size-3 rounded'
                    />
                    <span>{label.label}</span>
                  </div>
                  <div className='flex items-center'>
                    {selectedLabel?.value === label.value && (
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
