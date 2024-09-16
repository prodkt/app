import { Calendar } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../../primitives/avatar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../../primitives/hover-card'

/**
 *
 */
export function Assignee() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className='size-5 ring-1 ring-[var(--grayA4)]'>
          <AvatarImage src='https://github.com/prodkt.png' />
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='https://github.com/prodkt.png' />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>Bryan Funk</h4>
            <p className='text-sm'>
              Prodkt – created and maintained by Bryan Funk.
            </p>
            <div className='flex items-center pt-2'>
              <Calendar className='mr-2 size-4 opacity-70' />{' '}
              <span className='text-xs text-muted-foreground'>
                Joined July 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
