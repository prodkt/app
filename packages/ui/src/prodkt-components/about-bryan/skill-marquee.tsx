import type { ReactNode } from 'react'

import {
  ComponentLibrary,
  DesignLanguage,
  DesignLibraries,
  Documentation,
  Governance,
  Sandboxes,
} from '@/icons/design-system'
import { cn } from '@/utils/cn'

import Marquee from './marquee'

const skills = [
  {
    name: (
      <Sandboxes className='size-28 fill-[var(--grayA2)] stroke-[var(--grayA2)] stroke-0 p-0 text-[var(--grayA2)] brightness-50' />
    ),
    username: '@prodkt_',
    body: 'Prodkt.cloud',
    img: '',
  },
  {
    name: (
      <ComponentLibrary className='size-28 fill-[var(--grayA2)] stroke-[var(--grayA2)] stroke-0 p-0 text-[var(--grayA2)] brightness-50' />
    ),
    username: '@prodkt_',
    body: 'Prodkt.cloud',
    img: '',
  },
  {
    name: (
      <DesignLibraries className='size-28 fill-[var(--grayA2)] stroke-[var(--grayA2)] stroke-0 p-0 text-[var(--grayA2)] brightness-50' />
    ),
    username: '@prodkt_',
    body: 'Prodkt.cloud',
    img: '',
  },
  {
    name: (
      <DesignLanguage className='size-28 fill-[var(--grayA2)] stroke-[var(--grayA2)] stroke-0 p-0 text-[var(--grayA2)] brightness-50' />
    ),
    username: '@prodkt_',
    body: 'Prodkt.cloud',
    img: '',
  },
  {
    name: (
      <Documentation className='size-28 fill-[var(--grayA2)] stroke-[var(--grayA2)] stroke-0 p-0 text-[var(--grayA2)] brightness-50' />
    ),
    username: '@prodkt_',
    body: 'Prodkt.cloud',
    img: '',
  },
  {
    name: (
      <Governance className='size-28 fill-[var(--grayA2)] stroke-[var(--grayA2)] stroke-0 p-0 text-[var(--grayA2)] brightness-50' />
    ),
    username: '@prodkt_',
    body: 'Prodkt.cloud',
    img: '',
  },
]

const firstRow = skills.slice(0, skills.length / 2)
const secondRow = skills.slice(skills.length / 2)

const SkillCard = ({ name }: { name: ReactNode }) => {
  return (
    <figure
      className={cn(
        'relative cursor-pointer overflow-hidden',
        // light styles
        ' ',
        // dark styles
        '',
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <div className='flex flex-col'>{name}</div>
      </div>
    </figure>
  )
}

/**
 *
 */
export function SkillMarquee() {
  return (
    <div className='gradientMask-8 relative flex flex-row items-center justify-center overflow-hidden'>
      <Marquee vertical className='[--duration:20s]'>
        {firstRow.map((skill) => (
          <SkillCard key={skill.username} {...skill} />
        ))}
      </Marquee>
      <Marquee vertical reverse className='[--duration:20s]'>
        {secondRow.map((skill) => (
          <SkillCard key={skill.username} {...skill} />
        ))}
      </Marquee>
    </div>
  )
}
