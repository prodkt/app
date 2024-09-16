'use client'

import { createContext, useContext } from 'react'

import { motion, useReducedMotion } from 'framer-motion'

const FadeOutStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px 0px' }

/**
 *
 * @param props - The props for the component.
 * @returns Fadeout
 */
export function FadeOut(
  props: Readonly<React.ComponentPropsWithoutRef<typeof motion.div>>,
) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeOutStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    />
  )
}

/**
 * A component that provides a staggered fade-out animation.
 * @param props - The props for the component.
 * @param [props.faster] - If true, the stagger transition will be faster.
 * @returns The rendered component.
 */
export function FadeOutStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeOutStaggerContext.Provider value={true}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeOutStaggerContext.Provider>
  )
}
