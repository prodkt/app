import { ArrowRight } from 'lucide-react'

import { Separator } from '@prodkt/ui/primitives/separator'

export function DosAnnouncement() {
  return (
    <a
      href='/docs/changelog'
      className='inline-flex items-center rounded-lg border border-[var(--accent9)] bg-[var(-Accent-a2)] px-3 py-1.5 text-sm font-medium'
    >
      🎉{' '}
      <Separator
        className='mx-2 h-4 bg-[var(--accentA8)]'
        orientation='vertical'
      />{' '}
      <span className='sm:hidden'>Introducing Blocks</span>
      <span className='hidden sm:inline'>Introducing Blocks</span>
      <ArrowRight className='w-4 h-4 ml-1' />
    </a>
  )
}