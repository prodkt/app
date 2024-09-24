import React from 'react'

import './logo-cloud-experience.css'

const ExperienceLogoCloud = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { cta?: string } & {
    children?: React.ReactNode
  }
>(({ className, cta, children, ...props }, ref) => (
  <section
    ref={ref}
    className='relative py-12 mx-auto overflow-hidden border-t border-[var(--grayA2)] lg:px-20 logo-cloud-experience-gradient-mask xl:logo-cloud-experience-gradient-mask-xl'
    {...props}
  >
    <div className='z-[0] absolute w-full h-full bg-[var(--gray2)] rounded-[100%] blur-3xl -translate-y-[150%]' />
    <div>
      <div className=''>
        <div className='z-[2] flex flex-col items-center justify-start gap-6 xl:flex-row md:justify-center'>
          <div className=''>
            <p className='text-[0.675rem] font-medium uppercase tracking-widest text-[var(--gray9)] font-mono'>
              {cta}
            </p>
          </div>
          <div className=''>
            <div className='flex flex-row items-center justify-center gap-6'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
))

ExperienceLogoCloud.displayName = 'ExperienceLogoCloud'

export { ExperienceLogoCloud }
