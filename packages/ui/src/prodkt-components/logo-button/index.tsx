/* eslint-disable jsdoc/require-jsdoc */

import classNames from 'classnames'
import clsx from 'clsx'

export function LogoButton({
  customClass,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
  href: string
  customClass?: string
}) {
  const buttonClass = classNames(
    'relative z-0 object-contain group object-center p-1 aspect-square ring-1 ring-[var(--grayA4)] ring-inset rounded-lg', // always applied class
    {
      customClass: true, // conditionally applied class
    },
  )

  return (
    <a {...props} href={props.href} className={clsx(buttonClass, customClass)}>
      <span className='ease absolute inset-0 z-0 m-0 origin-center scale-0 rounded-lg bg-[var(--grayA2)] opacity-0 shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,0.1)] transition-all duration-200 will-change-transform group-hover:scale-100 group-hover:opacity-100 group-hover:shadow-[inset_0px_0px_1px_1px_rgba(255,255,255,.125)]'></span>
      {children}
    </a>
  )
}
