import type { SVGProps } from 'react'

const ChromaLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={256}
    height={164}
    viewBox='0 0 256 164'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <title>Chroma</title>
    <ellipse fill='#FFDE2D' cx={170.667} cy={81.92} rx={85.333} ry={81.92} />
    <ellipse fill='#327EFF' cx={85.333} cy={81.92} rx={85.333} ry={81.92} />
    <path
      d='M170.667 81.92c0 45.243-38.206 81.92-85.334 81.92V81.92h85.334Zm-85.334 0C85.333 36.677 123.538 0 170.667 0v81.92H85.333Z'
      fill='#FF6446'
    />
  </svg>
)

export default ChromaLogomark
