/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import type { LucideIcon } from 'lucide-react'

import {
  Bookmark,
  LayoutGrid,
  Settings,
  SquarePen,
  Tag,
  Users,
} from 'lucide-react'

import { urlToSlug } from './slugs'

interface Submenu {
  href: string
  label: string
  active: boolean
}

interface Menu {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus: Submenu[]
}

interface Group {
  groupLabel: string
  menus: Menu[]
}

/**
 *
 * @param pathname
 */
export function getMenuList(): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: URL.canParse('dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Posts',
          active: URL.canParse('dashboard'),
          icon: SquarePen,
          submenus: [
            {
              href: '/posts',
              label: 'All Posts',
              active: URL.canParse('dashboard'),
            },
            {
              href: '/posts/new',
              label: 'New Post',
              active: URL.canParse('dashboard'),
            },
          ],
        },
        {
          href: '/categories',
          label: 'Categories',
          active: URL.canParse('dashboard'),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: '/tags',
          label: 'Tags',
          active: URL.canParse('dashboard'),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: URL.canParse('dashboard'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/account',
          label: 'Account',
          active: URL.canParse('dashboard'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ]
}
