import type * as React from 'react'

import { DesignerMarks } from '@/prodkt-components/designer-marks'

interface TechDisplayProps {
  logoOnDark: string // Accept default priority as a prop
  logo: string
  title?: string
}

export const TechDisplay: React.FC<TechDisplayProps> = ({
  logoOnDark,
  logo,
  title = 'Build template',
}) => {
  return (
    <div className='relative grid w-auto grid-cols-2 -space-x-px'>
      <div className='bg-radial-gradient-2 relative flex h-full items-center justify-center px-6 py-4 font-mono text-xs uppercase tracking-widest'>
        <DesignerMarks />
        {title}
      </div>
      <div className='bg-radial-gradient-1 relative flex h-full items-center justify-center px-6 pb-3.5 pt-4 after:absolute after:inset-0 after:z-[-2] after:size-full after:bg-[var(--tomatoA8)] after:mix-blend-hard-light'>
        <DesignerMarks />
        <img
          src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${logoOnDark}`}
          alt='Logo'
          className='hidden h-6 dark:flex'
        />
        <img
          src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${logo}`}
          alt='Logo'
          className='h-6 dark:hidden'
        />
      </div>
    </div>
  )
}
