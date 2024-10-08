/* eslint-disable jsdoc/require-jsdoc */

import type React from 'react'

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/primitives/hover-card'

interface Props {
  props?: Props
  children?: React.ReactNode
  index?: number
  technologyName: string | undefined
  technologyMark: string | undefined
  id?: string
}

export function TechUsed({
  // props,
  children,
  index,
  technologyName,
  technologyMark,
  id,
}: Readonly<Props>) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <img
          key={id ?? index}
          src={
            technologyMark
              ? `https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${technologyMark}`
              : ''
          }
          alt={technologyName}
          className='relative max-h-8 max-w-12 object-contain object-center p-1'
        />
      </HoverCardTrigger>

      <HoverCardContent className='w-auto'>
        <div className='hoverCardTriggered--contents'>
          <p className='font-mono text-xs uppercase tracking-widest text-[var(--grayA7)]'>
            {technologyName}
          </p>
          <div className='flex flex-row items-center justify-center'>
            {children}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
