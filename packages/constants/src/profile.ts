import React from 'react'

// icons
import {
  Activity,
  CircleUser,
  KeyRound,
  LucideProps,
  Settings2,
} from 'lucide-react'

export const PROFILE_ACTION_LINKS: {
  key: string
  label: string
  href: string
  highlight: (pathname: string) => boolean
  Icon: React.FC<LucideProps>
}[] = [
  {
    key: 'profile',
    label: 'Profile',
    href: `/profile`,
    highlight: (pathname: string) => pathname === '/profile',
    Icon: CircleUser,
  },
  {
    key: 'change-password',
    label: 'Change password',
    href: `/profile/change-password`,
    highlight: (pathname: string) => pathname === '/profile/change-password',
    Icon: KeyRound,
  },
  {
    key: 'activity',
    label: 'Activity',
    href: `/profile/activity`,
    highlight: (pathname: string) => pathname === '/profile/activity',
    Icon: Activity,
  },
  {
    key: 'preferences',
    label: 'Preferences',
    href: `/profile/preferences/theme`,
    highlight: (pathname: string) => pathname.includes('/profile/preferences'),
    Icon: Settings2,
  },
]

export const PROFILE_VIEWER_TAB = [
  {
    route: '',
    label: 'Summary',
    selected: '/[workspaceSlug]/profile/[userId]',
  },
]

export const PROFILE_ADMINS_TAB = [
  {
    route: 'assigned',
    label: 'Assigned',
    selected: '/[workspaceSlug]/profile/[userId]/assigned',
  },
  {
    route: 'created',
    label: 'Created',
    selected: '/[workspaceSlug]/profile/[userId]/created',
  },
  {
    route: 'subscribed',
    label: 'Subscribed',
    selected: '/[workspaceSlug]/profile/[userId]/subscribed',
  },
  {
    route: 'activity',
    label: 'Activity',
    selected: '/[workspaceSlug]/profile/[userId]/activity',
  },
]
