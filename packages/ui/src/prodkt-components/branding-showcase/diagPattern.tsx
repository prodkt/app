import { SVGProps } from 'react'

const DiagPattern = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={6}
    fill='none'
    viewBox='0 0 6 6'
    fillRule='evenodd'
    {...props}
  >
    <g strokeWidth='0.75' stroke='currentColor' fill='none'>
      <path d='M5 0h1L0 6V5zM6 5v1H5z' />
    </g>
  </svg>
)

const BackgroundPattern = (props: SVGProps<SVGSVGElement>) => (
  <svg width='100%' height='100%' {...props}>
    <defs>
      <pattern
        id='diagPattern'
        patternUnits='userSpaceOnUse'
        width={6}
        height={6}
      >
        <DiagPattern />
      </pattern>
    </defs>
    <rect width='100%' height='100%' fill='url(#diagPattern)' />
  </svg>
)

export default BackgroundPattern
