/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

import React from 'react'

import type { VariantProps } from 'class-variance-authority'

import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'

import { ProdktLogotype } from '@/brands/prodkt'
import { Avatar, AvatarFallback, AvatarImage } from '@/primitives/avatar'
import { Badge } from '@/primitives/badge'
import { Button } from '@/primitives/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/primitives/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/primitives/dialog'
import { Input } from '@/primitives/input'
import { Label } from '@/primitives/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/primitives/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/primitives/select'
import { Separator } from '@/primitives/separator'
import { cn } from '@/utils/cn'

interface Team {
  label: string | JSX.Element
  logotype: string | JSX.Element
  value: string
  logomark: string | undefined
}

interface Group {
  label: string
  teams: Team[]
}

const groups: Group[] = [
  {
    label: 'Personal Account',
    teams: [
      {
        logotype: <ProdktLogotype className='h-auto w-20' />,
        label: 'Bryan Funk',
        value: 'personal',
        logomark:
          'https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1ad4fd1f-b9e0-445d-aedd-960bb4a7da8e.png',
      },
    ],
  },
  {
    label: 'Teams',
    teams: [
      {
        logotype: <ProdktLogotype className='h-auto w-20' />,
        label: <ProdktLogotype className='h-auto w-20' />,
        value: 'prodkt',
        logomark:
          'https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1ad4fd1f-b9e0-445d-aedd-960bb4a7da8e.png',
      },
    ],
  },
]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

type TeamSwitcherProps = PopoverTriggerProps

const switcherVariants = cva(
  'relative h-12 min-h-full w-[200px] bg-[var(--gray12)] text-[var(--gray7)] transition-all duration-300 hover:bg-[var(--grayA12)] hover:text-[var(--gray1)] dark:border-[var(--gray4)] dark:bg-[var(--gray1)] dark:from-[var(--gray4)] dark:to-[var(--gray5)] dark:hover:text-[var(--gray12)]',
  {
    variants: {
      variant: {
        default: '',
        header:
          'rounded-l-none rounded-r-2xl border border-l-0 border-[var(--gray12)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

/**
 * TeamSwitcher component allows users to toggle between different accent and gray colors.
 * @param root0 - The props object.
 * @param root0.className - Additional class names for styling.
 * @param root0.variant
 * @returns The rendered TeamSwitcher component.
 */
export function TeamSwitcher({
  className,
  variant,
}: Readonly<TeamSwitcherProps> & VariantProps<typeof switcherVariants>) {
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0]?.teams[0] ?? {
      logotype: <ProdktLogotype className='h-auto w-20' />,
      label: <ProdktLogotype className='h-auto w-20' />,
      value: 'prodkt',
      logomark:
        'https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1ad4fd1f-b9e0-445d-aedd-960bb4a7da8e.png',
    },
  )

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className='inset-y-0 my-0' asChild>
          <Button
            variant='ghost'
            type='button'
            aria-expanded={open}
            aria-label='Select a team'
            className={cn(switcherVariants({ variant }), className)}
          >
            {selectedTeam.label}
            <Avatar className='absolute inset-y-0 right-10 my-auto ml-auto mr-0 size-5'>
              <AvatarImage
                src={selectedTeam.logomark}
                alt={
                  typeof selectedTeam.label === 'string'
                    ? selectedTeam.label
                    : 'Team Logo'
                }
                className='grayscale'
              />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <CaretSortIcon className='ml-auto size-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search team...' />
            <CommandList>
              <CommandEmpty>No team found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.teams.map((team) => (
                    <CommandItem
                      key={team.value}
                      onSelect={() => {
                        setSelectedTeam(team)
                        setOpen(false)
                      }}
                      className='text-sm'
                    >
                      <Avatar className='mr-2 size-5'>
                        <AvatarImage
                          src={team.logomark}
                          alt={
                            typeof team.label === 'string'
                              ? team.label
                              : 'Team Logo'
                          }
                          className='grayscale'
                        />
                        <AvatarFallback>P</AvatarFallback>
                      </Avatar>
                      {team.label}
                      <CheckIcon
                        className={cn(
                          'ml-auto size-4',
                          selectedTeam.value === team.value
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewTeamDialog(true)
                    }}
                  >
                    <PlusCircledIcon className='mr-2 size-5' />
                    Create Team{' '}
                    <Badge variant={'technical'} className='ml-auto mr-0'>
                      Soon
                    </Badge>
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent className='p-0'>
        <DialogHeader>
          <div className='inline-flex flex-row items-center justify-start gap-2 px-4 pt-4'>
            <DialogTitle>Create team </DialogTitle>
            <Badge variant={'technical'}>Coming Soon</Badge>
          </div>
          <DialogDescription>
            <div className='px-4 pt-4'>
              <p className='text-muted-foreground text-sm'>
                Add a new team to manage your Prodkt projects.
              </p>
            </div>
            <Separator className='my-4' />
            <div className='flex h-5 items-center space-x-4 px-4 text-sm'>
              <div>Codeblocks</div>
              <Separator orientation='vertical' />
              <div>Flows</div>
              <Separator orientation='vertical' />
              <div>Brand Guidelines</div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className='space-y-4 p-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Team name</Label>
              <Input id='name' placeholder='Prodkt' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='plan'>Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a plan' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='free'>
                    <span className='font-medium'>Free</span> -{' '}
                    <span className='text-[var(--gray9)]'>
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value='pro'>
                    <span className='font-medium'>Pro</span> -{' '}
                    <span className='text-[var(--gray9)]'>
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter className='gap-0 space-x-0 overflow-hidden rounded-b-lg'>
          <Button
            className='grow basis-1/3 rounded-none'
            size='modal'
            variant='gray'
            onClick={() => {
              setShowNewTeamDialog(false)
            }}
          >
            Cancel
          </Button>
          <Button
            disabled
            className='!m-0 grow basis-2/3 rounded-none'
            size='modal'
            type='submit'
          >
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
