interface Props {
  color?: string
  className?: string // Explicitly define allowed props
  // Other specific props you want to accept
}

const Backlog = ({ color, className, ...rest }: Props) => (
  <svg
    height='16'
    width='16'
    fill='none'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Backlog</title>
    <path
      d='M14.9878 8.4167C14.9716 8.69232 14.7189 8.88531 14.4451 8.8496L13.4535 8.72025C13.1796 8.68453 12.9891 8.43335 12.9976 8.15731C12.9992 8.10513 13 8.05269 13 8C13 7.94731 12.9992 7.89487 12.9976 7.84268C12.9891 7.56665 13.1796 7.31547 13.4535 7.27975L14.4451 7.15039C14.7189 7.11468 14.9716 7.30767 14.9878 7.5833C14.9959 7.72116 15 7.8601 15 8C15 8.1399 14.9959 8.27883 14.9878 8.4167ZM14.0069 5.51202C14.262 5.40624 14.3847 5.11273 14.2609 4.86589C14.136 4.61692 13.9967 4.37644 13.8441 4.14552C13.6918 3.91513 13.3763 3.87493 13.1573 4.0432L12.3644 4.65254C12.1455 4.82078 12.1067 5.13349 12.2524 5.36807C12.3066 5.45538 12.3581 5.54444 12.4069 5.63513C12.5378 5.8783 12.8282 6.00084 13.0833 5.89505L14.0069 5.51202ZM11.8545 2.15589C12.0849 2.30815 12.1251 2.62371 11.9568 2.84267L11.3475 3.6356C11.1792 3.85455 10.8665 3.89325 10.6319 3.74761C10.5446 3.69342 10.4555 3.64187 10.3648 3.59307C10.1217 3.4622 9.99916 3.17184 10.1049 2.91676L10.488 1.99303C10.5938 1.73794 10.8873 1.6153 11.1341 1.7391C11.3831 1.86398 11.6236 2.00328 11.8545 2.15589ZM8.4166 1.01219C8.69226 1.02837 8.88531 1.28114 8.84959 1.55495L8.72025 2.54655C8.68453 2.82038 8.43338 3.01088 8.15736 3.00241C8.10516 3.00081 8.0527 3 8 3C7.9473 3 7.89484 3.00081 7.84264 3.00241C7.56662 3.01088 7.31547 2.82038 7.27975 2.54655L7.15041 1.55495C7.11469 1.28114 7.30774 1.02837 7.5834 1.01219C7.72124 1.0041 7.86014 1 8 1C8.13986 1 8.27876 1.0041 8.4166 1.01219ZM4.86589 1.7391C5.11273 1.6153 5.40624 1.73794 5.51201 1.99302L5.89507 2.91676C6.00084 3.17184 5.8783 3.4622 5.63514 3.59306C5.54446 3.64187 5.45542 3.69341 5.36812 3.7476C5.13351 3.89324 4.82076 3.85454 4.6525 3.63558L4.04317 2.84266C3.87491 2.6237 3.9151 2.30815 4.14547 2.1559C4.3764 2.00328 4.61691 1.86399 4.86589 1.7391ZM2.1559 4.14547C2.30815 3.9151 2.6237 3.87491 2.84266 4.04317L3.63558 4.6525C3.85454 4.82076 3.89324 5.13351 3.7476 5.36812C3.69341 5.45542 3.64187 5.54446 3.59306 5.63514C3.4622 5.8783 3.17184 6.00084 2.91676 5.89507L1.99302 5.51201C1.73794 5.40624 1.6153 5.11273 1.7391 4.86589C1.86399 4.61691 2.00328 4.3764 2.1559 4.14547ZM1.55495 7.15041C1.28114 7.11469 1.02837 7.30774 1.01219 7.5834C1.0041 7.72124 1 7.86014 1 8C1 8.13986 1.0041 8.27876 1.01219 8.4166C1.02837 8.69226 1.28114 8.88531 1.55495 8.84959L2.54655 8.72025C2.82038 8.68453 3.01088 8.43338 3.00241 8.15736C3.00081 8.10516 3 8.0527 3 8C3 7.9473 3.00081 7.89484 3.00241 7.84264C3.01088 7.56662 2.82038 7.31547 2.54655 7.27975L1.55495 7.15041ZM1.7391 11.1341C1.6153 10.8873 1.73794 10.5938 1.99303 10.488L2.91676 10.1049C3.17184 9.99916 3.4622 10.1217 3.59307 10.3648C3.64187 10.4555 3.69342 10.5446 3.74761 10.6319C3.89325 10.8665 3.85455 11.1792 3.6356 11.3475L2.84267 11.9568C2.62371 12.1251 2.30815 12.0849 2.15589 11.8545C2.00328 11.6236 1.86398 11.3831 1.7391 11.1341ZM4.14552 13.8441C3.91513 13.6918 3.87493 13.3763 4.0432 13.1573L4.65254 12.3644C4.82078 12.1455 5.13349 12.1067 5.36807 12.2524C5.45538 12.3066 5.54444 12.3581 5.63513 12.4069C5.8783 12.5378 6.00084 12.8282 5.89505 13.0833L5.51202 14.0069C5.40624 14.262 5.11273 14.3847 4.86589 14.2609C4.61692 14.136 4.37644 13.9967 4.14552 13.8441ZM7.5833 14.9878C7.30768 14.9716 7.11469 14.7189 7.1504 14.4451L7.27975 13.4535C7.31547 13.1796 7.56665 12.9891 7.84269 12.9976C7.89487 12.9992 7.94731 13 8 13C8.05269 13 8.10513 12.9992 8.15732 12.9976C8.43335 12.9891 8.68453 13.1796 8.72025 13.4535L8.84961 14.4451C8.88532 14.7189 8.69233 14.9716 8.4167 14.9878C8.27884 14.9959 8.1399 15 8 15C7.8601 15 7.72117 14.9959 7.5833 14.9878ZM11.1341 14.2609C10.8873 14.3847 10.5937 14.262 10.488 14.0069L10.1049 13.0833C9.99916 12.8282 10.1217 12.5378 10.3649 12.4069C10.4555 12.3581 10.5446 12.3066 10.6319 12.2524C10.8665 12.1067 11.1792 12.1455 11.3474 12.3644L11.9568 13.1573C12.1251 13.3763 12.0849 13.6919 11.8545 13.8441C11.6236 13.9967 11.3831 14.136 11.1341 14.2609ZM13.8441 11.8545C13.6919 12.0849 13.3763 12.1251 13.1574 11.9568L12.3644 11.3474C12.1455 11.1792 12.1067 10.8665 12.2524 10.6319C12.3066 10.5446 12.3581 10.4555 12.4069 10.3649C12.5378 10.1217 12.8282 9.99916 13.0833 10.1049L14.0069 10.488C14.262 10.5937 14.3847 10.8873 14.2609 11.1341C14.136 11.3831 13.9967 11.6236 13.8441 11.8545Z'
      fill='url(#paint0_linear_4381_919)'
      fillRule='evenodd'
    />
    <defs>
      <linearGradient
        id='paint0_linear_4381_919'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='1'
        y2='15'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--grayA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--grayA11)'}
        />
      </linearGradient>
    </defs>
  </svg>
)

const Todo = ({ color, className, ...rest }: Props) => (
  <svg
    height='14'
    width='14'
    fill='none'
    viewBox='0 0 14 14'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Todo</title>
    <g clipPath='url(#clip0_4381_923)'>
      <path
        d='M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z'
        stroke='url(#paint0_linear_4381_923)'
        strokeWidth='2'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_4381_923'
        gradientUnits='userSpaceOnUse'
        x1='7'
        x2='7'
        y1='1'
        y2='13'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--grayA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--grayA11)'}
        />
      </linearGradient>
      <clipPath id='clip0_4381_923'>
        <rect height='14' width='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

const InProgress = ({ color, className, ...rest }: Props) => (
  <svg
    height='16'
    width='16'
    fill='none'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>In Progress</title>
    <g opacity='0.9'>
      <path
        d='M12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962ZM4.11091 11.8891C5.14236 12.9205 6.54131 13.5 8 13.5C9.45869 13.5 10.8576 12.9205 11.8891 11.8891C12.9205 10.8576 13.5 9.45869 13.5 8C13.5 6.54131 12.9205 5.14236 11.8891 4.11091C10.8576 3.07946 9.45869 2.5 8 2.5C6.54131 2.5 5.14236 3.07946 4.11091 4.11091C3.07946 5.14236 2.5 6.54131 2.5 8C2.5 9.45869 3.07946 10.8576 4.11091 11.8891Z'
        fill='url(#paint0_linear_4381_925)'
        stroke='url(#paint1_linear_4381_925)'
      />
      <path
        d='M11.0709 8.02908C11.0633 8.83305 10.7406 9.60245 10.1715 10.1715C9.80049 10.5426 9.34428 10.8089 8.8488 10.9514C8.76699 10.9749 8.69726 10.9567 8.63222 10.8971C8.55933 10.8303 8.5 10.7126 8.5 10.571V5.43055C8.5 5.28886 8.55937 5.17112 8.6323 5.10435C8.69737 5.04478 8.76712 5.0266 8.84896 5.0502C9.34389 5.19289 9.79955 5.45908 10.1702 5.82976C10.7458 6.40535 11.0694 7.18585 11.07 7.99984C11.07 8.00966 11.0703 8.01941 11.0709 8.02908Z'
        fill='url(#paint2_linear_4381_925)'
        stroke='url(#paint3_linear_4381_925)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_4381_925'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='1'
        y2='15'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4381_925'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='1'
        y2='15'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint2_linear_4381_925'
        gradientUnits='userSpaceOnUse'
        x1='9.7855'
        x2='9.7855'
        y1='4.42999'
        y2='11.571'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint3_linear_4381_925'
        gradientUnits='userSpaceOnUse'
        x1='9.7855'
        x2='9.7855'
        y1='4.42999'
        y2='11.571'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
    </defs>
  </svg>
)

const Cancelled = ({ color, className, ...rest }: Props) => (
  <svg
    height='14'
    width='14'
    fill='none'
    viewBox='0 0 14 14'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Cancelled</title>
    <g clipPath='url(#clip0_4381_933)'>
      <path
        d='M3.61612 3.61612C4.10427 3.12796 4.89573 3.12796 5.38388 3.61612L7 5.23223L8.61612 3.61612C9.10426 3.12797 9.89574 3.12795 10.3839 3.61613C10.872 4.10429 10.872 4.89574 10.3839 5.38388C10.3839 5.38388 10.3839 5.38389 10.3838 5.38389L8.76776 7L10.3838 8.61611C10.3839 8.61611 10.3839 8.61612 10.3839 8.61612C10.872 9.10425 10.872 9.89569 10.3839 10.3838C10.3839 10.3838 10.3838 10.3839 10.3838 10.3839M3.61612 3.61612L8.96967 10.0303C9.26256 10.3232 9.73744 10.3232 10.0303 10.0303L10.3838 10.3839M3.61612 3.61612C3.12796 4.10427 3.12796 4.89573 3.61612 5.38388L5.23223 7L3.61612 8.61612C3.12797 9.10426 3.12795 9.89574 3.61613 10.3839C4.10429 10.872 4.89574 10.872 5.38388 10.3839C5.38388 10.3839 5.38389 10.3839 5.38389 10.3838L7 8.76776L8.61611 10.3838L3.61612 3.61612ZM10.3838 10.3839C9.89569 10.872 9.10425 10.872 8.61612 10.3839L10.3838 10.3839ZM13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7Z'
        fill='url(#paint0_linear_4381_933)'
        stroke='url(#paint1_linear_4381_933)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_4381_933'
        gradientUnits='userSpaceOnUse'
        x1='7'
        x2='7'
        y1='0'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--redA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--redA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4381_933'
        gradientUnits='userSpaceOnUse'
        x1='7'
        x2='7'
        y1='0'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--redA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--redA11)'}
        />
      </linearGradient>
      <clipPath id='clip0_4381_933'>
        <rect height='14' width='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

const Done = ({ color, className, ...rest }: Props) => (
  <svg
    height='14'
    width='14'
    fill='none'
    viewBox='0 0 14 14'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Done</title>
    <g clipPath='url(#clip0_4382_1064)'>
      <path
        d='M10.6322 4.1131L10.6322 4.1131C10.0631 3.62533 9.20632 3.69122 8.71853 4.26031L6.24372 7.14758L5.56574 6.46961C5.03575 5.93959 4.17644 5.93959 3.64644 6.46961C3.11645 6.9996 3.11646 7.85889 3.64644 8.38888L3.64645 8.38889L5.36073 10.1032L5.36076 10.1032C5.62795 10.3703 5.99463 10.5143 6.37266 10.4996C6.75031 10.4851 7.10481 10.3137 7.35079 10.0268L7.3508 10.0268L10.7793 6.02676C10.7793 6.02676 10.7793 6.02675 10.7793 6.02674C11.2671 5.45766 11.2013 4.60091 10.6322 4.1131ZM13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7Z'
        fill='url(#paint0_linear_4382_1064)'
        stroke='url(#paint1_linear_4382_1064)'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_4382_1064'
        gradientUnits='userSpaceOnUse'
        x1='7'
        x2='7'
        y1='0'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--indigoA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--indigoA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4382_1064'
        gradientUnits='userSpaceOnUse'
        x1='7'
        x2='7'
        y1='0'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--indigoA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--indigoA11)'}
        />
      </linearGradient>
      <clipPath id='clip0_4382_1064'>
        <rect height='14' width='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
)

const Add = ({ color, className, ...rest }: Props) => (
  <svg
    height='16'
    width='16'
    fill='none'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Add</title>
    <path
      d='M14.5002 8.00132C14.5002 11.5913 11.59 14.5014 8.0001 14.5014C4.41019 14.5014 1.5 11.5913 1.5 8.00132C1.5 4.41141 4.41019 1.50122 8.0001 1.50122C11.59 1.50122 14.5002 4.41142 14.5002 8.00132ZM7.85426 3.7096C7.17542 3.7096 6.62508 4.25991 6.62508 4.93877V6.91797H4.93755C4.25869 6.91797 3.70838 7.46831 3.70838 8.14715C3.70838 8.82599 4.25869 9.37633 4.93755 9.37633H6.62508V11.0639C6.62508 11.7428 7.17547 12.293 7.85426 12.293C8.53305 12.293 9.08344 11.7428 9.08344 11.0639V9.37633H11.0626C11.7416 9.37633 12.2918 8.82598 12.2918 8.14715C12.2918 7.46832 11.7416 6.91797 11.0626 6.91797H9.08344V4.93877C9.08344 4.25991 8.5331 3.7096 7.85426 3.7096Z'
      fill='#8A8F98'
      stroke='url(#paint0_linear_4382_1055)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_4382_1055'
        gradientUnits='userSpaceOnUse'
        x1='8.0001'
        x2='8.0001'
        y1='1.00122'
        y2='15.0014'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--indigoA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--indigoA11)'}
        />
      </linearGradient>
    </defs>
  </svg>
)

const MilestoneOutline = ({ color, className, ...rest }: Props) => (
  <svg
    height='16'
    width='16'
    fill='none'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Milestone</title>
    <path
      d='M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z'
      stroke='url(#paint0_linear_4382_1073)'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <defs>
      <linearGradient
        id='paint0_linear_4382_1073'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='2'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
    </defs>
  </svg>
)

const MilestoneFilled = ({ color, className, ...rest }: Props) => (
  <svg
    height='16'
    width='16'
    fill='none'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Milestone</title>
    <path
      d='M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z'
      fill='url(#paint0_linear_4382_1076)'
      stroke='url(#paint1_linear_4382_1076)'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <defs>
      <linearGradient
        id='paint0_linear_4382_1076'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='2'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4382_1076'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='2'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
    </defs>
  </svg>
)

const MilestoneProgress = ({ color, className, ...rest }: Props) => (
  <svg
    height='16'
    width='16'
    fill='none'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    {...rest}
  >
    <title>Milestone</title>
    <path
      d='M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z'
      opacity='0.5'
      stroke='url(#paint0_linear_4382_1078)'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <g clipPath='url(#clip0_4382_1078)'>
      <path
        d='M7.3406 2.32C7.68741 1.89333 8.31259 1.89333 8.6594 2.32L12.7903 7.402C13.0699 7.74597 13.0699 8.25403 12.7903 8.598L8.6594 13.68C8.31259 14.1067 7.68741 14.1067 7.3406 13.68L3.2097 8.598C2.9301 8.25403 2.9301 7.74597 3.2097 7.402L7.3406 2.32Z'
        stroke='url(#paint1_linear_4382_1078)'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_4382_1078'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='2'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_4382_1078'
        gradientUnits='userSpaceOnUse'
        x1='8'
        x2='8'
        y1='2'
        y2='14'
      >
        <stop stopColor={color ? `var(--${color}A9)` : 'var(--amberA9)'} />
        <stop
          offset='1'
          stopColor={color ? `var(--${color}A11)` : 'var(--amberA11)'}
        />
      </linearGradient>
      <clipPath id='clip0_4382_1078'>
        <rect height='8' width='8' fill='white' transform='translate(8)' />
      </clipPath>
    </defs>
  </svg>
)

export {
  Backlog,
  Todo,
  InProgress,
  Cancelled,
  Done,
  Add,
  MilestoneOutline,
  MilestoneFilled,
  MilestoneProgress,
}
