import { SVGProps } from 'react'

const RegistrationMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={17}
    fill='none'
    {...props}
  >
    <g filter='url(#a)' shapeRendering='crispEdges'>
      <path fill='url(#b)' d='M3.5 8.492a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z' />
      <path
        stroke='url(#c)'
        strokeMiterlimit={10}
        d='M3 8.492a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z'
      />
    </g>
    <path
      stroke='url(#d)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      d='M16.5 8.492H.5'
    />
    <path
      stroke='url(#e)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      d='M8.5.5v16'
    />
    <path
      fill='#000'
      stroke='url(#f)'
      d='M8.5 11.992c-1.976 0-3.5-1.524-3.5-3.5s1.524-3.5 3.5-3.5 3.5 1.524 3.5 3.5-1.524 3.5-3.5 3.5Z'
    />
    <defs>
      <radialGradient
        id='b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(0 5 -5 0 8.5 8.492)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentColor' />
        <stop offset={1} stopColor='currentColor' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='d'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(0 .5 -8 0 8.5 7.992)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#871015' />
        <stop offset={1} stopColor='currentColor' />
      </radialGradient>
      <radialGradient
        id='e'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(0 8 -.5 0 8 8.5)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#871015' />
        <stop offset={1} stopColor='currentColor' />
      </radialGradient>
      <radialGradient
        id='f'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(0 3 -3 0 8.5 8.492)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#ED1C24' />
        <stop offset={1} stopColor='currentColor' />
      </radialGradient>
      <linearGradient
        id='c'
        x1={8.5}
        x2={8.5}
        y1={3.492}
        y2={13.492}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#ED1C24' />
        <stop offset={0.507} stopColor='currentColor' />
        <stop offset={1} stopColor='#ED1C24' />
      </linearGradient>
      <filter
        id='a'
        width={12}
        height={12}
        x={2.5}
        y={2.492}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_128_257' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_128_257'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
)
export default RegistrationMark
