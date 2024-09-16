/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

import React from 'react'

import type { Database } from '@/database.types'
import type { VariantProps } from 'class-variance-authority'

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'
import { Cog, MailPlus, PlusIcon } from 'lucide-react'

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

export type Workspace = Database['public']['Tables']['workspaces']['Row']
export type Projects = Database['public']['Tables']['projects']['Row']
export type Logo = Database['public']['Tables']['logos']['Row']
export type Files = Database['public']['Tables']['directus_files']['Row']

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

type WorkspaceDropdownProps = PopoverTriggerProps

const switcherVariants = cva(
  'relative h-12 text-[var(--gray10)] transition-all duration-300 hover:bg-[var(--grayA1)] hover:text-[var(--gray12)] dark:border-[var(--gray4)] dark:hover:bg-transparent dark:hover:text-[var(--gray1)] dark:hover:text-[var(--gray12)]',
  {
    variants: {
      variant: {
        default: 'w-full rounded-none px-4',
        header:
          'rounded-l-none rounded-r-2xl border border-l-0 border-[var(--gray12)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

interface WorkspaceType {
  workspace: Workspace
  workspaceTitle: Workspace['title']
  workspaceLogo: string | undefined
  projectList: Projects[]
}

/**
 * WorkspaceDropdown component allows users to toggle between different accent and gray colors.
 * @param root0 - The props object.
 * @param root0.className - Additional class names for styling.
 * @param root0.variant
 * @param root0.workspaceName
 * @param root0.workspaceSlug
 * @param root0.workspaceLogomark
 * @param root0.workspaceLogotype
 * @param root0.workspace
 * @param root0.workspaceTitle
 * @param root0.workspaceLogo
 * @param root0.projectList
 * @returns The rendered WorkspaceDropdown component.
 */
export function WorkspaceDropdown({
  workspaceTitle = 'Prodkt',
  workspaceLogo = '1ad4fd1f-b9e0-445d-aedd-960bb4a7da8e.png',
  className,
  variant,
}: Readonly<WorkspaceDropdownProps> &
  VariantProps<typeof switcherVariants> & {
    workspaceTitle?: WorkspaceType['workspaceTitle']
    workspaceLogo?: WorkspaceType['workspaceLogo']
  }) {
  const [open, setOpen] = React.useState(false)
  const [showNewWorkspaceDialog, setShowNewWorkspaceDialog] =
    React.useState(false)

  return (
    <Dialog
      open={showNewWorkspaceDialog}
      onOpenChange={setShowNewWorkspaceDialog}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className='inset-y-0 my-0' asChild>
          <Button
            variant='ghost'
            type='button'
            aria-expanded={open}
            aria-label='Select a workspace'
            className={cn(switcherVariants({ variant }), className)}
          >
            <Avatar className='mr-2 size-5'>
              <AvatarImage
                src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${workspaceLogo}`}
                alt={
                  typeof workspaceLogo === 'string'
                    ? workspaceLogo
                    : 'Workspace Logo'
                }
                className=''
              />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            {workspaceTitle}
            <CaretSortIcon className='ml-auto size-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-56 p-0'>
          <Command>
            <CommandInput
              className='text-xs'
              placeholder='Search workspace...'
            />
            <CommandList>
              <CommandEmpty>No workspace found.</CommandEmpty>

              <CommandGroup heading='Workspaces'>
                <CommandItem className='text-xs'>
                  <Avatar className='mr-2 size-5'>
                    <AvatarImage
                      src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${workspaceLogo}`}
                      alt={
                        typeof workspaceTitle === 'string'
                          ? workspaceTitle
                          : 'Team Logo'
                      }
                      className=''
                    />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  {workspaceTitle}
                  <CheckIcon
                    className={cn(
                      'ml-auto size-4',
                      workspaceTitle === workspaceTitle
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              </CommandGroup>
            </CommandList>
            <CommandSeparator />

            <CommandList>
              <CommandGroup heading='Settings'>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewWorkspaceDialog(true)
                    }}
                    className='bg-transparent p-0 hover:bg-transparent aria-selected:bg-transparent'
                  >
                    <Button
                      variant='link'
                      className='w-full justify-start gap-2 px-1 text-xs'
                      onSelect={() => {
                        setOpen(false)
                        setShowNewWorkspaceDialog(true)
                      }}
                    >
                      <PlusIcon size={16} />
                      Create Workspace
                    </Button>
                  </CommandItem>
                </DialogTrigger>
                <a href='/' className='w-full'>
                  <Button
                    variant='link'
                    className='w-full justify-start gap-2 px-1 text-xs'
                  >
                    <MailPlus size={16} />
                    Workspace Invites
                  </Button>
                </a>
                <a href='/' className='w-full'>
                  <Button
                    variant='link'
                    className='w-full justify-start gap-2 px-1 text-xs'
                  >
                    <Cog size={16} />
                    Workspace Settings
                  </Button>
                </a>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent className='p-0'>
        <DialogHeader>
          <div className='inline-flex flex-row items-center justify-start gap-2 px-4 pt-4'>
            <DialogTitle>Create workspace </DialogTitle>
            <Badge variant={'technical'}>Coming Soon</Badge>
          </div>
          <DialogDescription>
            <div className='px-4 pt-4'>
              <p className='text-sm text-muted-foreground'>
                Add a new workspace to manage your Prodkt projects.
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
              <Label htmlFor='name'>Workspace name</Label>
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
              setShowNewWorkspaceDialog(false)
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
