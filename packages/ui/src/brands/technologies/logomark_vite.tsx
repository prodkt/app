import type { SVGProps } from 'react'

const ViteLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={25}
    viewBox='0 0 26 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Vite</title>
    <g clipPath='url(#clip0_4533_14110)'>
      <path
        d='M24.58 4.502 13.65 24.048a.594.594 0 0 1-1.035.004L1.467 4.504a.594.594 0 0 1 .62-.879L13.03 5.581c.07.012.142.012.211 0l10.714-1.953c.494-.09.87.436.625.874Z'
        fill='url(#paint0_linear_4533_14110)'
      />
      <path
        d='m18.243 1.06-8.09 1.585a.297.297 0 0 0-.239.273l-.497 8.404a.297.297 0 0 0 .363.307l2.252-.52a.297.297 0 0 1 .358.35l-.67 3.276a.297.297 0 0 0 .378.344l1.391-.423a.297.297 0 0 1 .377.344l-1.063 5.147c-.067.322.362.497.54.221l.12-.184 6.59-13.154a.297.297 0 0 0-.321-.425l-2.318.447a.297.297 0 0 1-.342-.374l1.513-5.245a.297.297 0 0 0-.342-.373Z'
        fill='url(#paint1_linear_4533_14110)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_4533_14110'
        x1={1.195}
        y1={2.926}
        x2={14.799}
        y2={21.402}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#41D1FF' />
        <stop offset={1} stopColor='#BD34FE' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4533_14110'
        x1={12.402}
        y1={1.49}
        x2={14.863}
        y2={18.371}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFEA83' />
        <stop offset={0.083} stopColor='#FFDD35' />
        <stop offset={1} stopColor='#FFA800' />
      </linearGradient>
      <clipPath id='clip0_4533_14110'>
        <path
          fill='#fff'
          transform='translate(.839 .966)'
          d='M0 0h24.356v24H0z'
        />
      </clipPath>
    </defs>
  </svg>
)

export default ViteLogomark
