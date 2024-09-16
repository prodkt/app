import type React from 'react'

import {
  MobileBlog,
  MobileChangelogs,
  MobileData,
  MobileDesign,
  MobileDocs,
  MobileFlows,
  MobileHome,
  MobileWork,
} from '../../icons/navigation/mobileIcons'

interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  link: string
  icon?: React.ComponentType<{ className?: string }> | null
  name: string
  [key: string]: any // Allow additional props
}

const FooterMenuItem = ({
  link,
  icon: Icon,
  name,
  ...props
}: MenuItemProps) => {
  return (
    <li
      className='inline-flex w-full grow list-none items-center justify-center'
      {...props}
    >
      <a
        className='group relative mx-0 inline-flex h-12 w-fit w-full grow flex-row items-center justify-center gap-2 overflow-hidden border-none border-[var(--grayA1)] px-5 py-3.5 text-sm text-[var(--gray8)] transition-all after:absolute after:inset-x-0 after:bottom-0 after:z-0 after:mx-auto after:size-px after:origin-bottom after:rounded-t-3xl after:bg-gradient-to-tr after:from-transparent after:to-[var(--grayA1)] after:opacity-0 after:transition-all after:duration-200 hover:border-[var(--grayA1)] hover:text-[var(--gray1)] hover:after:size-full hover:after:rounded-t-3xl hover:after:opacity-100 hover:after:blur dark:text-[var(--gray10)] dark:after:from-[var(--grayA5)]  dark:after:to-[var(--grayA1)] dark:hover:text-[var(--gray12)]'
        href={link}
      >
        {Icon && typeof Icon === 'function' ? (
          <Icon className='z-[14] z-[1] size-4 brightness-150 saturate-0 transition-all duration-300 group-hover:scale-125 group-hover:saturate-150' />
        ) : (
          Icon
        )}
        <p className='z-[1] text-xs font-medium underline decoration-[var(--gray11)] underline-offset-4 transition-all duration-300 group-hover:decoration-[var(--gray9)] group-hover:decoration-[var(--grayA10)] dark:decoration-[var(--gray8)]'>
          {name}
        </p>
      </a>
    </li>
  )
}

const FooterMenu = ({ ...props }) => {
  return (
    <ul
      className='inline-flex h-12 grow flex-row items-center justify-end gap-1 gap-x-px bg-gradient-to-t from-[var(--gray5)] to-transparent'
      {...props}
    >
      <FooterMenuItem link='/' icon={MobileHome} name='Home' />
      <FooterMenuItem link='/flows' icon={MobileFlows} name='Flows' />
      <FooterMenuItem link='/blog' icon={MobileBlog} name='Blog' />
      <FooterMenuItem link='/work' icon={MobileWork} name='Work' />
      <FooterMenuItem link='/docs' icon={MobileDocs} name='Docs' />
      <FooterMenuItem link='/data' icon={MobileData} name='Data' />
      <FooterMenuItem link='/design' icon={MobileDesign} name='Design' />
      <FooterMenuItem
        link='/changelog'
        icon={MobileChangelogs}
        name='Changelog'
      />
    </ul>
  )
}

FooterMenu.displayName = 'FooterMenu'
FooterMenuItem.displayName = 'FooterMenuItem'

export { FooterMenu, FooterMenuItem }
