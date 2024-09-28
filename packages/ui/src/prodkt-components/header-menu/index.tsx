import type React from 'react'

import './header-menu.css'

import {
  Blog,
  Changelogs,
  Codeblocks,
  Concepts,
  Docs,
  Flows,
  Repo,
  Roadmaps,
  Work,
} from '../../icons/navigation'

interface MenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  link: string
  icon?: React.ComponentType<{ className?: string }> | null
  name: string
  [key: string]: any // Allow additional props
}

const HeaderMenuItem = ({
  link,
  icon: Icon,
  name,
  ...props
}: MenuItemProps) => {
  return (
    <li
      className='m-auto flex h-full w-auto list-none items-center justify-center'
      {...props}
    >
      <a
        className='group relative inset-0 z-[11] mx-0 inline-flex h-full w-fit grow flex-row items-center justify-center gap-1.5 overflow-hidden rounded-[0.8rem] px-3.5 py-3 font-sans text-xs tracking-tight text-[var(--gray8)] ring-1 ring-inset ring-[var(--grayA1)] transition-all will-change-auto after:absolute after:inset-x-0 after:bottom-0 after:z-0 after:mx-auto after:size-px after:origin-bottom after:rounded-t-3xl after:bg-gradient-to-tr after:from-transparent after:to-[var(--grayA1)] after:opacity-0 after:transition-all after:duration-500 hover:text-[var(--gray1)] hover:ring-[var(--grayA2)] hover:after:size-full hover:after:rounded-t-3xl hover:after:opacity-100 hover:after:blur dark:text-[var(--gray11)] dark:after:from-[var(--grayA5)] dark:after:to-[var(--grayA1)] dark:hover:text-[var(--gray12)]'
        href={link}
      >
        {Icon && typeof Icon === 'function' ? (
          <Icon className='pointer-events-none z-[1] size-4 select-none brightness-125 saturate-150 transition-all duration-500 group-hover:brightness-150 group-hover:saturate-200' />
        ) : (
          Icon
        )}
        <p className='gradientMask-to-b-40 z-[1] text-sm font-normal transition-all'>
          {name}
        </p>
      </a>
    </li>
  )
}

const HeaderMenu = ({ ...props }) => {
  return (
    <ul
      className='prodkt-header-menu m-auto hidden h-12 w-auto flex-row place-content-center place-items-center items-center justify-start gap-px overflow-y-hidden rounded-2xl border border-[var(--gray12)] bg-[var(--gray12)] p-[2px] shadow-2xl dark:border-[var(--gray4)] dark:bg-[var(--gray1)] xl:inline-flex'
      {...props}
    >
      <HeaderMenuItem link='/flows' icon={Flows} name='Flows' />
      <HeaderMenuItem link='/blog' icon={Blog} name='Blog' />
      <HeaderMenuItem link='/work' icon={Roadmaps} name='Work' />
      <HeaderMenuItem link='/projects' icon={Concepts} name='Projects' />
      <HeaderMenuItem link='/codeblocks' icon={Codeblocks} name='Codeblocks' />
      <HeaderMenuItem link='/repos' icon={Repo} name='Repos' />
      <HeaderMenuItem link='/docs' icon={Docs} name='Docs' />
      <HeaderMenuItem link='/files' icon={Work} name='Files' />
      <HeaderMenuItem link='/changelog' icon={Changelogs} name='Changelog' />
    </ul>
  )
}

HeaderMenu.displayName = 'HeaderMenu'
HeaderMenuItem.displayName = 'HeaderMenuItem'

export { HeaderMenu, HeaderMenuItem }
