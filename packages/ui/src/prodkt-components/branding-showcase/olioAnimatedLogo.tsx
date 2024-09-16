import type { SVGProps } from 'react'

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
    stroke: 'var(--crimsonA9)',
    filter: 'url(#f2)',
    style: 'overflow: visible',
    strokeWidth: 0,
    strokeDasharray: '2,2',
  },
  visible: {
    pathLength: 1,
    filter: 'url(#f3)',
    stroke: 'var(--crimsonA8)',
    strokeWidth: 2,
  },
}

const OlioDashStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={506}
    height={307}
    viewBox='0 0 506 307'
    {...props}
  >
    <motion.path
      d='M158.146 232.375c-17.144 17.129-39.049 25.694-65.716 25.694-26.667 0-48.572-8.565-65.715-25.694C9.572 215.032 1 193.192 1 166.856c0-26.55 8.572-48.497 25.715-65.84C43.858 83.672 65.763 75.001 92.43 75.001s48.572 8.671 65.716 26.015c17.143 17.343 25.714 39.29 25.714 65.84 0 26.336-8.571 48.176-25.714 65.519Zm-99.367-29.869c8.254 9.421 19.365 14.132 33.334 14.132 13.968 0 25.185-4.711 33.651-14.132 8.466-9.421 12.699-21.304 12.699-35.65 0-14.56-4.233-26.55-12.699-35.971-8.466-9.635-19.683-14.453-33.651-14.453-13.969 0-25.08 4.818-33.334 14.453-8.254 9.635-12.381 21.625-12.381 35.971 0 14.346 4.127 26.229 12.38 35.65Z'
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
      d='M158.146 232.375c-17.144 17.129-39.049 25.694-65.716 25.694-26.667 0-48.572-8.565-65.715-25.694C9.572 215.032 1 193.192 1 166.856c0-26.55 8.572-48.497 25.715-65.84C43.858 83.672 65.763 75.001 92.43 75.001s48.572 8.671 65.716 26.015c17.143 17.343 25.714 39.29 25.714 65.84 0 26.336-8.571 48.176-25.714 65.519Zm-99.367-29.869c8.254 9.421 19.365 14.132 33.334 14.132 13.968 0 25.185-4.711 33.651-14.132 8.466-9.421 12.699-21.304 12.699-35.65 0-14.56-4.233-26.55-12.699-35.971-8.466-9.635-19.683-14.453-33.651-14.453-13.969 0-25.08 4.818-33.334 14.453-8.254 9.635-12.381 21.625-12.381 35.971 0 14.346 4.127 26.229 12.38 35.65Z'
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
      d='M161.257 305.763c4.021-11.134 7.408-21.84 10.159-32.117l61.697-214.864c2.54-8.993 4.974-18.735 7.302-29.227h43.81l-69.951 244.091c-3.386 12.418-6.138 23.124-8.254 32.117h-44.763Z'
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
      d='M161.257 305.763c4.021-11.134 7.408-21.84 10.159-32.117l61.697-214.864c2.54-8.993 4.974-18.735 7.302-29.227h43.81l-69.951 244.091c-3.386 12.418-6.138 23.124-8.254 32.117h-44.763Z'
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
      d='M341.65 43.687c-4.444 4.496-10.265 6.744-17.46 6.744-7.196 0-13.017-2.248-17.461-6.744-4.445-4.711-6.667-10.706-6.667-17.986 0-7.28 2.222-13.168 6.667-17.665 4.444-4.496 10.265-6.744 17.461-6.744 7.195 0 13.016 2.248 17.46 6.744 4.445 4.497 6.667 10.385 6.667 17.665 0 7.28-2.222 13.275-6.667 17.986ZM229.204 273.646c3.598-10.064 6.984-20.769 10.159-32.117l40.303-138.988c2.539-8.993 4.973-18.735 7.301-29.226h43.811l-48.557 168.214c-3.387 11.348-6.138 22.053-8.254 32.117h-44.763Z'
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
      d='M341.65 43.687c-4.444 4.496-10.265 6.744-17.46 6.744-7.196 0-13.017-2.248-17.461-6.744-4.445-4.711-6.667-10.706-6.667-17.986 0-7.28 2.222-13.168 6.667-17.665 4.444-4.496 10.265-6.744 17.461-6.744 7.195 0 13.016 2.248 17.46 6.744 4.445 4.497 6.667 10.385 6.667 17.665 0 7.28-2.222 13.275-6.667 17.986ZM229.204 273.646c3.598-10.064 6.984-20.769 10.159-32.117l40.303-138.988c2.539-8.993 4.973-18.735 7.301-29.226h43.811l-48.557 168.214c-3.387 11.348-6.138 22.053-8.254 32.117h-44.763Z'
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
      d='M479.285 232.375c-17.143 17.129-39.048 25.694-65.715 25.694s-48.572-8.565-65.716-25.694c-17.143-17.343-25.714-39.183-25.714-65.519 0-26.55 8.571-48.497 25.714-65.84 17.144-17.344 39.049-26.015 65.716-26.015 26.667 0 48.572 8.671 65.715 26.015 17.143 17.343 25.715 39.29 25.715 65.84 0 26.336-8.572 48.176-25.715 65.519Zm-99.367-29.869c8.255 9.421 19.366 14.132 33.334 14.132 13.969 0 25.186-4.711 33.652-14.132 8.466-9.421 12.698-21.304 12.698-35.65 0-14.56-4.232-26.55-12.698-35.971-8.466-9.635-19.683-14.453-33.652-14.453-13.968 0-25.079 4.818-33.334 14.453-8.254 9.635-12.381 21.625-12.381 35.971 0 14.346 4.127 26.229 12.381 35.65Z'
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
      d='M479.285 232.375c-17.143 17.129-39.048 25.694-65.715 25.694s-48.572-8.565-65.716-25.694c-17.143-17.343-25.714-39.183-25.714-65.519 0-26.55 8.571-48.497 25.714-65.84 17.144-17.344 39.049-26.015 65.716-26.015 26.667 0 48.572 8.671 65.715 26.015 17.143 17.343 25.715 39.29 25.715 65.84 0 26.336-8.572 48.176-25.715 65.519Zm-99.367-29.869c8.255 9.421 19.366 14.132 33.334 14.132 13.969 0 25.186-4.711 33.652-14.132 8.466-9.421 12.698-21.304 12.698-35.65 0-14.56-4.232-26.55-12.698-35.971-8.466-9.635-19.683-14.453-33.652-14.453-13.968 0-25.079 4.818-33.334 14.453-8.254 9.635-12.381 21.625-12.381 35.971 0 14.346 4.127 26.229 12.381 35.65Z'
      variants={icon}
      initial='hidden'
      animate='visible'
      strokeDasharray='2,2'
      strokeLinecap='round'
      strokeLinejoin='bevel'
      strokeDashoffset='1'
      transition={{ spring, duration: 16, repeat: 0 }}
    />

    <defs>
      <filter id='f2' width='20' height='20'>
        <feOffset in='SourceGraphic' dx='0' dy='0' />
        <feGaussianBlur stdDeviation='5' />
        <feBlend in='SourceGraphic' in2='blurOut' />
      </filter>
      <filter id='f3' width='120' height='120'>
        <feOffset in='SourceGraphic' dx='0' dy='0' />
        <feGaussianBlur stdDeviation='5' />
        <feBlend in='SourceGraphic' in2='blurIn' />
      </filter>
    </defs>
  </svg>
)
export default OlioDashStroke
