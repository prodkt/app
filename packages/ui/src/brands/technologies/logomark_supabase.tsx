import type { SVGProps } from 'react'

const SupabaseLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={257}
    height={263}
    fill='currentColor'
    viewBox='0 0 256 263'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <title>Supabase</title>
    <defs>
      <linearGradient
        x1='20.862%'
        y1='20.687%'
        x2='63.426%'
        y2='44.071%'
        id='supabaseLogomark-a'
      >
        <stop stopColor='#249361' offset='0%' />
        <stop stopColor='#3ECF8E' offset='100%' />
      </linearGradient>
      <linearGradient
        x1='1.991%'
        y1='-13.158%'
        x2='21.403%'
        y2='34.708%'
        id='supabaseLogomark-b'
      >
        <stop offset='0%' />
        <stop stopOpacity={0} offset='100%' />
      </linearGradient>
    </defs>
    <path
      d='M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669Z'
      fill='url(#supabaseLogomark-a)'
    />
    <path
      d='M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292l-101.37 127.669Z'
      fillOpacity={0.2}
      fill='url(#supabaseLogomark-b)'
    />
    <path
      d='M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292L106.4 4.369Z'
      fill='#3ECF8E'
    />
  </svg>
)

export default SupabaseLogomark
