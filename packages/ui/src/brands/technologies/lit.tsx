import { SVGProps } from 'react'

const LitLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={170}
    height={80}
    viewBox='0 0 170 80'
    fill='none'
    {...props}
  >
    <g fill='currentColor' clipPath='url(#lit-a)'>
      <path d='M157.11 31.064v11.47h12.146v6.212H157.11v14.177c0 1.434.039 2.868.199 4.102.318 2.111 1.593 4.182 3.345 4.979 2.27 1.035 3.863.836 8.602.677l-1.155 6.85c-.318.159-1.593.119-2.787.119-2.788 0-13.302.996-15.453-9.837-.358-1.872-.278-3.783-.278-6.73V48.825h-5.417l.08-6.332h5.337v-11.43h7.527Zm-20.59 11.43v36.44h-7.487v-36.44h7.487Zm0-11.43v6.491h-7.567v-6.491h7.567Zm-33.294 40.7h19.196l-7.169 7.17H95.58v-47.87h7.646v40.7ZM31.86 0 15.93 15.93v31.86l15.93-15.93V0Zm0 31.86v31.86l15.93-15.93V15.93L31.86 31.86Zm15.93 15.93v31.86l15.93-15.93V31.86L47.79 47.79Zm-31.86 0L0 31.86v31.86l15.93 15.93V47.79Z' />
    </g>
    <defs>
      <clipPath id='lit-a'>
        <path fill='currentColor' d='M0 0h170v80H0z' />
      </clipPath>
    </defs>
  </svg>
)
export default LitLogo
