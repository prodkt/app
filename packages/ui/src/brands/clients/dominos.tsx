'use client'

import type { SVGProps } from 'react'

const Dominos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='34'
    height='34'
    viewBox='0 0 34 34'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <title>Dominos</title>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M32.5698 10.1511L23.7438 1.3241C23.5611 1.1403 23.3437 0.994583 23.1042 0.895369C22.8648 0.796155 22.608 0.74542 22.3488 0.746101C22.0896 0.74542 21.8329 0.796155 21.5934 0.895369C21.354 0.994583 21.1366 1.1403 20.9538 1.3241L1.22781 21.0501C0.858363 21.4204 0.650879 21.9221 0.650879 22.4451C0.650879 22.9682 0.858363 23.4698 1.22781 23.8401L10.0548 32.6691C10.4268 33.0411 10.9228 33.2471 11.4508 33.2471C11.9788 33.2471 12.4728 33.0421 12.8448 32.6691L32.5698 12.9421C33.3398 12.1721 33.3398 10.9221 32.5698 10.1521H32.5718L32.5698 10.1511ZM22.3478 1.6301C22.6278 1.6301 22.9058 1.7371 23.1178 1.9491L31.9458 10.7761C32.1498 10.9806 32.2644 11.2577 32.2644 11.5466C32.2644 11.8355 32.1498 12.1126 31.9458 12.3171L22.3858 21.8771L12.0168 11.5091L21.5768 1.9491C21.7898 1.7371 22.0688 1.6291 22.3478 1.6291V1.6301ZM7.68681 19.8501C7.35076 19.8493 7.01787 19.9149 6.70727 20.0432C6.39667 20.1715 6.1145 20.36 5.87697 20.5977C5.63944 20.8354 5.45124 21.1177 5.32318 21.4284C5.19513 21.7391 5.12975 22.0721 5.13081 22.4081C5.13081 23.0621 5.37781 23.7171 5.87881 24.2151C6.35945 24.6932 7.00984 24.9617 7.68781 24.9617C8.36578 24.9617 9.01617 24.6932 9.49681 24.2151C9.99681 23.7171 10.2438 23.0611 10.2438 22.4071C10.2443 22.0712 10.1786 21.7386 10.0503 21.4282C9.92208 21.1178 9.73385 20.8357 9.49641 20.5982C9.25897 20.3607 8.977 20.1723 8.66665 20.044C8.35629 19.9156 8.02366 19.8497 7.68781 19.8501H7.68681ZM15.1918 25.0651C15.8458 25.0651 16.5018 24.8131 16.9998 24.3151C17.2384 24.0789 17.4276 23.7976 17.5564 23.4875C17.6851 23.1774 17.7509 22.8448 17.7498 22.5091C17.7498 21.8531 17.4998 21.1991 16.9998 20.7011C16.7629 20.4629 16.4812 20.2739 16.1709 20.1452C15.8605 20.0164 15.5278 19.9505 15.1918 19.9511C14.5388 19.9511 13.8828 20.2011 13.3838 20.7011C13.1459 20.938 12.957 21.2196 12.8282 21.5297C12.6994 21.8398 12.633 22.1723 12.633 22.5081C12.633 22.8439 12.6994 23.1764 12.8282 23.4865C12.957 23.7966 13.1459 24.0782 13.3838 24.3151C13.8838 24.8131 14.5388 25.0651 15.1918 25.0651ZM1.85181 21.6711C1.7504 21.7723 1.66994 21.8924 1.61504 22.0247C1.56014 22.157 1.53189 22.2989 1.53189 22.4421C1.53189 22.5853 1.56014 22.7272 1.61504 22.8595C1.66994 22.9918 1.7504 23.1119 1.85181 23.2131L10.6788 32.0431C10.7799 32.1445 10.9 32.2249 11.0322 32.2798C11.1644 32.3347 11.3062 32.3629 11.4493 32.3629C11.5925 32.3629 11.7342 32.3347 11.8664 32.2798C11.9986 32.2249 12.1187 32.1445 12.2198 32.0431L21.7598 22.5011L11.3918 12.1331L1.85181 21.6711Z'
      fill='currentColor'
    />
    <path
      d='M22.3748 14.0791C22.7106 14.0795 23.0432 14.0137 23.3536 13.8854C23.6639 13.7571 23.9459 13.5688 24.1834 13.3314C24.4209 13.094 24.6093 12.8121 24.7377 12.5018C24.8661 12.1915 24.9321 11.8589 24.9318 11.5231C24.9318 10.8691 24.6798 10.2131 24.1818 9.7151C23.9446 9.47732 23.6628 9.28868 23.3525 9.15997C23.0423 9.03125 22.7097 8.965 22.3738 8.965C22.0379 8.965 21.7053 9.03125 21.3951 9.15997C21.0849 9.28868 20.803 9.47732 20.5658 9.7151C20.3278 9.9522 20.1389 10.234 20.0101 10.5442C19.8812 10.8545 19.8149 11.1871 19.8149 11.5231C19.8149 11.8591 19.8812 12.1917 20.0101 12.502C20.1389 12.8122 20.3278 13.094 20.5658 13.3311C21.0658 13.8301 21.7208 14.0791 22.3748 14.0791Z'
      fill='currentColor'
    />
  </svg>
)

export { Dominos }
