/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import { ChevronLeft } from 'lucide-react'

import { Button } from '@/primitives/button'
import { cn } from '@/utils/cn'

interface SidebarToggleProps {
  isOpen: boolean | undefined
  setIsOpen?: () => void
}

/**
 *
 * @param root0
 * @param root0.isOpen
 * @param root0.setIsOpen
 */
export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className='invisible absolute -right-[16px] top-[12px] z-20 lg:visible'>
      <Button
        onClick={() => setIsOpen?.()}
        className='size-8 rounded-md bg-[var(--gray2)] hover:bg-[var(--gray3)]'
        variant='outline'
        size='icon'
      >
        <ChevronLeft
          className={cn(
            'size-4 transition-transform duration-700 ease-in-out',
            isOpen === false ? 'rotate-180' : 'rotate-0',
          )}
        />
      </Button>
    </div>
  )
}
