// @ts-nocheck

import { motion } from 'framer-motion'

const spring = {
  type: 'inertia',
  velocity: 100,
  // damping: 10,
  // stiffness: 1000
}

const icon = {
  hidden: {
    pathLength: 0,
    fill: 'var(--crimsonA1)',
    stroke: 'var(--crimsonA5)',
    // filter: 'url(#a)',
    style: 'overflow: visible',
    strokeWidth: 0,
    strokeDasharray: '2,2',
  },
  visible: {
    pathLength: 1,
    // filter: 'url(#a)',
    stroke: 'var(--crimsonA9)',
    strokeWidth: 2,
  },
}

const RemixAnimatedLogo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={481}
    height={350}
    viewBox='0 0 481 350'
    {...props}
  >
    <title>Remix Animated Logo</title>
    <g clipPath='url(#a)'>
      <motion.path
        d='M0 248.878h154.653L257.459 349.92 0 248.878Z'
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeDasharray='2,2'
        strokeLinecap='round'
        strokeLinejoin='bevel'
        strokeDashoffset='1'
        transition={{ spring, duration: 10, repeat: 0 }}
      />
      <motion.path
        d='M149.969 101.042 0 248.958l304.623-147.916H149.969Z'
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeDasharray='2,2'
        strokeLinecap='round'
        strokeLinejoin='bevel'
        strokeDashoffset='1'
        transition={{ spring, duration: 16, repeat: 0 }}
      />
      <motion.path
        d='M0 248.959 102.806 350h154.653L0 248.878v.081ZM0 248.878h154.653v.08l149.97-147.916L0 248.878Z'
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeDasharray='2,2'
        strokeLinecap='round'
        strokeLinejoin='bevel'
        strokeDashoffset='1'
        transition={{ spring, duration: 16, repeat: 0 }}
      />
      <motion.path
        d='M481 101.042H326.347L223.541 0 481 101.042ZM331.031 248.958 481 101.042 176.377 248.958h154.654Z'
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeDasharray='2,2'
        strokeLinecap='round'
        strokeLinejoin='bevel'
        strokeDashoffset='1'
        transition={{ spring, duration: 16, repeat: 0 }}
      />
      <motion.path
        d='M481 101.042 378.194 0H223.541L481 101.042ZM481 101.042H326.347l-149.97 147.916L481 101.042Z'
        variants={icon}
        initial='hidden'
        animate='visible'
        strokeDasharray='2,2'
        strokeLinecap='round'
        strokeLinejoin='bevel'
        strokeDashoffset='1'
        transition={{ spring, duration: 16, repeat: 0 }}
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='var(--crimsonA9)' d='M0 0h481v350H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default RemixAnimatedLogo
