import React from 'react'

const Test = React.forwardRef<HTMLDivElement>(({ ...props }, ref) => {
  return (
    <section
      ref={ref}
      className='gradientMask-to-b-10 relative flex w-full flex-col items-center justify-center overflow-hidden px-10 pb-40 md:px-20 '
      {...props}
    >
      test
    </section>
  )
})

Test.displayName = 'Test'

export { Test }
