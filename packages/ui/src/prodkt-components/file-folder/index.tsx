import type { SVGProps } from 'react'

import './file-folder.css'

export interface FileFolderProps extends SVGProps<SVGSVGElement> {
  text?: string
  count?: string
  src?: string
}

const FileFolder = ({
  src,
  text,
  count,
  ...props
}: Readonly<FileFolderProps>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={201}
    height={282}
    viewBox='0 0 201 282'
    fill='none'
    {...props}
  >
    <title>file folder</title>
    <g className='' clipPath='url(#prodktFileFolder-roundedBottom)'>
      <path
        fill='url(#a)'
        fillOpacity={1}
        className='object-cover object-center'
        stroke='url(#b)'
        d='M179.394 281.299H21.606C9.949 281.299.5 271.85.5 260.194V22.404C.5 10.749 9.95 1.3 21.605 1.3h70.982a24 24 0 0 1 23.323 18.34l1.224 5.045a21.106 21.106 0 0 0 20.51 16.128h41.75c11.657 0 21.106 9.45 21.106 21.106v198.276c0 11.656-9.449 21.105-21.106 21.105Z'
      />
      {src && (
        <image
          href={src}
          width='201'
          height='280'
          opacity={0.5}
          className='fileFolderMask rounded-[1.4rem] object-cover object-center'
          x='0'
          y='0'
          preserveAspectRatio='xMidYMid slice'
        />
      )}
      <text
        x='50%' // Adjust this to a more central position
        y='230'
        fill='var(--gray11)'
        fontSize='14'
        className='z-[1] font-medium tracking-tight'
        fontFamily='inherit'
        textAnchor='middle'
      >
        {text}
      </text>
      <text
        x='50%' // Adjust this to a more central position
        y='250'
        fill='var(--gray8)'
        fontSize='12'
        className='relative font-mono text-[.65rem] uppercase tracking-widest'
        fontFamily='inherit'
        textAnchor='middle'
      >
        {count} Files
      </text>
    </g>
    <defs>
      {/* Your gradients and clipPath definitions remain unchanged */}
      <linearGradient
        id='a'
        x1={455.814}
        x2={-254.814}
        y1={226.574}
        y2={226.574}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray1)' />
        <stop offset={1} stopColor='var(--gray3)' />
      </linearGradient>
      <linearGradient
        id='b'
        x1={100.5}
        x2={100.5}
        y1={1.299}
        y2={281.299}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='var(--gray3)' />
        <stop offset={1} stopColor='var(--gray7)' />
      </linearGradient>
      <clipPath id='prodktFileFolder-roundedBottom'>
        <path
          fill='url(#a)'
          fillOpacity={1}
          stroke='url(#b)'
          d='M179.394 281.299H21.606C9.949 281.299.5 271.85.5 260.194V22.404C.5 10.749 9.95 1.3 21.605 1.3h70.982a24 24 0 0 1 23.323 18.34l1.224 5.045a21.106 21.106 0 0 0 20.51 16.128h41.75c11.657 0 21.106 9.45 21.106 21.106v198.276c0 11.656-9.449 21.105-21.106 21.105Z'
        />
      </clipPath>
    </defs>
  </svg>
)

export default FileFolder
