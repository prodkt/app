import * as React from 'react'

import Astro from '@/brands/technologies/astro'
import Directus from '@/brands/technologies/directus'
import Docker from '@/brands/technologies/docker'
import ReactLogo from '@/brands/technologies/react'
import Storybook from '@/brands/technologies/storybook'
import Supabase from '@/brands/technologies/supabase'

import { CloudLogo, LogoCloud } from '.'

const LogoCloudTechnology = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return (
    <div
      ref={ref}
      className='relative z-[1] mx-auto mb-12 mt-[calc(-0.6rem_-_1px)] flex flex-col items-center justify-start overflow-visible backdrop-blur md:mb-20 lg:mb-28'
      {...props}
    >
      <LogoCloud>
        <CloudLogo>
          <Supabase className='h-4 w-auto max-w-16' />
        </CloudLogo>
        <CloudLogo>
          <Astro className='h-4 w-auto max-w-16' />
        </CloudLogo>
        <CloudLogo>
          <Directus className='h-4 w-auto max-w-16' />
        </CloudLogo>
        <CloudLogo>
          <Storybook className='h-4 w-auto max-w-16' />
        </CloudLogo>
        <CloudLogo>
          <ReactLogo className='h-4 w-auto max-w-16' />
        </CloudLogo>
        <CloudLogo>
          <Docker className='h-4 w-auto max-w-16' />
        </CloudLogo>
      </LogoCloud>
    </div>
  )
})

LogoCloudTechnology.displayName = 'LogoCloudTechnology'
export default LogoCloudTechnology
