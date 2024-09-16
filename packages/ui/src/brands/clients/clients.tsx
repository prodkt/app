import type { ReactNode } from 'react'

import { motion, MotionConfig } from 'framer-motion'

import Marquee from '../../effects/marquee'
import { FadeIn } from '../../motion/FadeIn'
import { Cisco } from './cisco'
import { CocaCola } from './coke'
import { Dominos } from './dominos'
import { Eminem } from './eminem'
import { HellsAngels } from './hellsangels'
import { Hm } from './hm'
import { Hp } from './hp'
import { RevolutionVodka } from './revolutionvodka'
import { Samsung } from './samsung'
import { Shady } from './shady'
import { Toyota } from './toyota'
import { Truwhip } from './truwhip'

const clients = [
  CocaCola,
  Dominos,
  Truwhip,
  HellsAngels,
  Shady,
  RevolutionVodka,
  Toyota,
  Hm,
  Samsung,
  Hp,
  Cisco,
  Eminem,
]

/**
 * @returns The rendered component.
 */
export function Clients() {
  return (
    <MotionConfig
      transition={{
        duration: 5,
        delayChildren: 0,
        viewport: { once: false },
        transition: {
          type: 'Inertia',
          stiffness: 100,
          damping: 60,
          restDelta: 0.001,
          staggerChildren: -10.1,
          delayChildren: 0,
        },
      }}
    >
      <FadeIn>
        <div
          id='bryan-worked-with'
          className='relative z-[1] flex size-full min-h-48 flex-col items-center justify-center text-center lg:min-h-72 lg:py-20'
        >
          <h3 className='absolute top-4 text-balance px-4 text-sm font-normal md:top-10 lg:flex'>
            Proud to have worked with some great brands through the years.
          </h3>
          <div className='prodkt-logo-grid flex h-auto w-full flex-col items-center justify-center gap-0'>
            <Marquee
              reverse
              pauseOnHover
              className='prodkt-logo-grid hidden w-full [--duration:50s] lg:flex'
            >
              <ParentComponent />
            </Marquee>
            <Marquee
              pauseOnHover
              className='prodkt-logo-grid w-full [--duration:50s]'
            >
              <ParentComponent />
            </Marquee>{' '}
            <Marquee
              reverse
              pauseOnHover
              className='prodkt-logo-grid hidden w-full [--duration:50s] lg:flex'
            >
              <ParentComponent />
            </Marquee>
          </div>
        </div>
      </FadeIn>
    </MotionConfig>
  )
}

export const ParentComponent = () => {
  return (
    <>
      {Array.from({ length: clients.length * 1 }).map((_, index) => {
        // Calculate the original index in the clients array
        const originalIndex = index % clients.length
        const logo = clients[originalIndex]
        // Determine position
        const isFirst = index < clients.length // First third
        const isLast = index >= clients.length * 2 // Last third
        // Apply conditional styling or classes based on position
        const itemClass = isFirst
          ? 'firstChildStyle reverse [animation-direction:reverse]'
          : isLast
            ? 'lastChildStyle reverse [animation-direction:reverse]'
            : 'middleChildStyle'

        return (
          <motion.div layout className={itemClass} key={index}>
            <div className='itemItem'>
              <div className='aspect-square clientLogo relative isolate size-20 overflow-hidden rounded-[24px] p-px'>
                <div className='aspect-square flex size-20 items-center justify-center rounded-[24px] p-4'>
                  {(logo as ReactNode) ?? null}
                  <div className='absolute left-0 top-0 z-[-1]  size-5 rounded-full blur-xl' />
                  <svg
                    width='0'
                    height='0'
                    className='absolute inset-0 size-full object-cover'
                    viewBox='0 0 1 1'
                  >
                    <title>Squircle shape mask</title>
                    <clipPath
                      id='squircleClip'
                      clipPathUnits='objectBoundingBox'
                    >
                      <path d='M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5' />
                    </clipPath>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}
