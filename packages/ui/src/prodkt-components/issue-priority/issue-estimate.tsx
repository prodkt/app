/* eslint-disable security/detect-object-injection */

import * as React from 'react'

import { Pyramid } from 'lucide-react'

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

interface IssueEstimateProps {
  defaultEstimate?: string // Accept default estimate as a prop
  disableShortcut?: boolean
}

interface Estimate {
  value: string
  label: string
  color: string // This should be a valid color name or hex code
}

const estimates: readonly Estimate[] = [
  { value: '2', label: 'XS', color: 'gray' },
  { value: '3', label: 'S', color: 'gray' },
  { value: '4', label: 'M', color: 'gray' },
  { value: '5', label: 'L', color: 'gray' },
  { value: '6', label: 'XL', color: 'gray' },
]

export const IssueEstimate: React.FC<IssueEstimateProps> = ({
  defaultEstimate,
  disableShortcut,
}) => {
  const [openPopover, setOpenPopover] = React.useState(false)
  const [openTooltip, setOpenTooltip] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  // Set the initial estimate based on the passed prop or fallback to 'no-estimate'
  const initialEstimate: Estimate | null =
    estimates.find((p) => p.value === defaultEstimate) ?? null
  const [selectedEstimate, setSelectedEstimate] =
    React.useState<Estimate | null>(initialEstimate)

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
                aria-label='Set estimate'
                variant='ghost'
                size='sm'
                className='flex h-6 select-none flex-row items-center justify-center gap-1 rounded-md border px-1 py-0.5 text-xs hover:bg-opacity-0 hover:text-[var(--grayA12)] group-hover:bg-[var(--grayA1)]'
              >
                {selectedEstimate &&
                selectedEstimate.value !== 'no-estimate' ? (
                  <>
                    <div
                      style={{
                        backgroundColor: `var(--${selectedEstimate.color}A1)`,
                      }}
                      className='size-3 rounded'
                      aria-hidden='true'
                    >
                      <Pyramid size={12} className='stroke-[var(--grayA6)]' />
                    </div>
                    {selectedEstimate.label}
                  </>
                ) : (
                  <>
                    <NoPriorityIcon
                      className='size-4 text-[var(--gray9)]'
                      aria-hidden='true'
                      title='Set estimate'
                    />
                    Set estimate
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
            <span className=''>Change estimate</span>
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
              if (idx >= 0 && idx < estimates.length) {
                setSelectedEstimate(estimates[idx] ?? null)
                setOpenTooltip(false)
                setOpenPopover(false)
                setSearchValue('')
                return
              }
              setSearchValue(searchValue)
            }}
            className='text-[0.8125rem] leading-normal'
            placeholder='Set estimate'
          />
          <CommandList>
            <CommandGroup>
              {estimates.map((estimate) => (
                <CommandItem
                  key={estimate.value}
                  value={estimate.value || ''}
                  onSelect={(value) => {
                    const foundEstimate = estimates.find(
                      (p) => p.value === value,
                    )
                    setSelectedEstimate(foundEstimate ?? null)
                    setOpenTooltip(false)
                    setOpenPopover(false)
                    setSearchValue('')
                  }}
                  className='group flex w-full items-center justify-between rounded-md text-[0.8125rem] leading-normal'
                >
                  <div className='flex items-center'>
                    <div
                      style={{ backgroundColor: `var(--${estimate.color}A1)` }}
                      className='mr-2 size-3 rounded'
                    >
                      <Pyramid size={12} className='stroke-[var(--grayA6)]' />
                    </div>
                    <span>{estimate.label}</span>
                  </div>
                  <div className='flex items-center'>
                    {selectedEstimate?.value === estimate.value && (
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
