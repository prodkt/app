import type React from 'react'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { cn } from '@/utils/cn'

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  /**
   *
   * @param root0 The mouse event object.
   * @param root0.currentTarget The current target element of the mouse event.
   * @param root0.clientX The X coordinate of the mouse pointer.
   * @param root0.clientY The Y coordinate of the mouse pointer.
   */
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <div
      className={cn(
        'group relative flex h-[40rem] w-full items-center justify-center bg-[var(--accent-a3)]',
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div className='bg-dot-thick-white pointer-events-none absolute inset-0' />
      <motion.div
        className='bg-dot-thick-white pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  )
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 2,
        ease: 'linear',
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={cn(
        `relative inline-block rounded-lg   bg-gradient-to-r from-[var(--accent-a9)] to-[var(--gray-a9)] px-1 pb-1`,
        className,
      )}
    >
      {children}
    </motion.span>
  )
}
