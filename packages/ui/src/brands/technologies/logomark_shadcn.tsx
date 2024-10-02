import type { SVGProps } from 'react'

const ShadcnLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Shadcn</title>
    <g
      clipPath='url(#clip0_4530_13108)'
      fillRule='evenodd'
      clipRule='evenodd'
      fill='#EEE'
    >
      <path d='M21.06 11.063a1.005 1.005 0 0 1 0 1.421l-8.794 8.794a1.005 1.005 0 1 1-1.421-1.421l8.794-8.794a1.005 1.005 0 0 1 1.42 0ZM19.301 1.39a1.005 1.005 0 0 1 0 1.42L2.593 19.52a1.005 1.005 0 1 1-1.422-1.422L17.88 1.389a1.005 1.005 0 0 1 1.421 0Z' />
    </g>
    <defs>
      <clipPath id='clip0_4530_13108'>
        <path
          fill='#fff'
          transform='translate(.5 .718)'
          d='M0 0h21.105v21.105H0z'
        />
      </clipPath>
    </defs>
  </svg>
)

export default ShadcnLogomark
