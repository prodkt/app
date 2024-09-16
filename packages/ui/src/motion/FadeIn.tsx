import { createContext, useContext } from 'react'

import type { HTMLMotionProps } from 'framer-motion'

import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px 600px 0px' }

interface FadeInProps
  extends React.ComponentPropsWithoutRef<typeof motion.div> {}

interface FadeInProps extends HTMLMotionProps<'div'> {}

export function FadeIn(props: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1 }}
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

interface FadeInStaggerProps
  extends React.ComponentPropsWithoutRef<typeof motion.div> {
  faster?: boolean
}

export function FadeInStagger({
  faster = false,
  ...props
}: Readonly<FadeInStaggerProps>) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
