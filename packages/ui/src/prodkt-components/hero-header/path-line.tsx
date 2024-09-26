import type { SVGProps } from 'react'

const PathLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={77}
    height={38}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Path Line</title>
    <path
      d='M1 36.671v-.64c0-10.506 12.018-19.024 26.842-19.024H53.91C66.382 17.007 76.493 9.84 76.493 1'
      stroke='url(#pathline-a)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='1 4'
    />
    <path
      d='M1 36.671v-.64c0-10.506 12.018-19.024 26.842-19.024H53.91C66.382 17.007 76.493 9.84 76.493 1'
      stroke='url(#pathline-b)'
      strokeLinecap='round'
      strokeWidth={1.5}
      strokeLinejoin='round'
      strokeDasharray='1 2'
    />
    <defs>
      <linearGradient
        id='pathline-a'
        x1={-151.528}
        y1={143.685}
        x2={79.575}
        y2={-34.671}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--grayA9' />
        <stop offset={0.565} stopColor='var(--grayA3)' stopOpacity={0.5} />
        <stop offset={0.805} stopColor='var(--grayA9)' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='pathline-b'
        x1={38.747}
        y1={1}
        x2={38.747}
        y2={36.671}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.375} stopColor='var(--grayA3)' />
        <stop offset={0.56} stopColor='var(--grayA9)' />
      </linearGradient>
    </defs>
  </svg>
)

const PathLineVert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1}
    height={86}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Path Line Vertical</title>
    <g
      filter='url(#pathline-vert-a)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='1 2'
    >
      <path d='M25 25.33V61' stroke='url(#pathline-vert-b)' />
      <path d='M25 25.33V61' stroke='url(#pathline-vert-c)' />
    </g>
    <defs>
      <radialGradient
        id='pathline-vert-a'
        cx={0}
        cy={0}
        r={0}
        gradientUnits='userSpaceOnUse'
        gradientTransform='matrix(1.53068 -92.2022 3.57855 .0594 24.51 80.651)'
      >
        <stop stopColor='#fff' />
        <stop offset={0.375} stopColor='var(--grayA3)' stopOpacity={0.15} />
        <stop offset={0.56} stopColor='var(--grayA9)' stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id='pathline-vert-b'
        x1={0}
        y1={25.3}
        x2={0}
        y2={62.211}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.375} stopColor='var(--grayA3)' />
        <stop offset={0.56} stopColor='var(--grayA9)' />
      </linearGradient>
      <filter
        id='pathline-vert-c'
        x={0}
        y={0.83}
        width={10}
        height={84.67}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={12} />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.89 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_380_6132'
        />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0' />
        <feBlend
          in2='effect1_dropShadow_380_6132'
          result='effect2_dropShadow_380_6132'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect2_dropShadow_380_6132'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={0} dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0' />
        <feBlend in2='shape' result='effect3_innerShadow_380_6132' />
      </filter>
    </defs>
  </svg>
)

const PathLineComposed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={161}
    height={38}
    fill='none'
    stroke='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Path Line</title>
    <path
      d='M1 36.671v-.64c0-10.506 12.018-19.024 26.842-19.024H53.91C66.382 17.007 76.493 9.84 76.493 1'
      stroke='url(#paint0_linear_381_6135)'
      strokeLinecap='round'
      strokeWidth={1.25}
      strokeLinejoin='round'
      strokeDasharray='1 1.5'
    />
    <path
      d='M80.268 1V36.67'
      stroke='url(#paint1_linear_381_6135)'
      strokeWidth={1.25}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='1 2'
    />
    <path
      d='M159.536 36.671v-.64c0-10.506-12.018-19.024-26.842-19.024h-26.067C94.154 17.007 84.043 9.84 84.043 1'
      stroke='url(#paint2_linear_381_6135)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.25}
      strokeDasharray='1 1.5'
    />
    <defs>
      <linearGradient
        id='paint0_linear_381_6135'
        x1={38.747}
        y1={4}
        x2={38.747}
        y2={36.671}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.075} stopColor='var(--grayA1)' stopOpacity={0} />
        <stop offset={0.375} stopColor='var(--grayA9)' stopOpacity={1} />
        <stop offset={0.75} stopColor='var(--grayA1)' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint1_linear_381_6135'
        x1={80.768}
        y1={-10}
        x2={80.768}
        y2={66.671}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.095} stopColor='var(--grayA1)' stopOpacity={0} />
        <stop offset={0.25} stopColor='var(--grayA9)' stopOpacity={1} />
        <stop offset={0.75} stopColor='var(--grayA1)' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint2_linear_381_6135'
        x1={121.789}
        y1={4}
        x2={121.789}
        y2={36.671}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.075} stopColor='var(--grayA1)' stopOpacity={0} />
        <stop offset={0.375} stopColor='var(--grayA9)' stopOpacity={1} />
        <stop offset={0.75} stopColor='var(--grayA1)' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

export { PathLineComposed, PathLine, PathLineVert }
