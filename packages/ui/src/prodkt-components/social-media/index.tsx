'use client'

import * as React from 'react'

import type { VariantProps } from 'class-variance-authority'

import { cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

import {
  BehanceLogo,
  DiscordLogo,
  DockerLogo,
  DribbbleLogo,
  FigmaLogo,
  GithubLogo,
  GitlabLogo,
  InstagramLogo,
  LinkedinLogo,
  SlackLogo,
  XLogo,
  YouTubeLogo,
} from '../../brands/socials'

const socialVariants = cva(
  'content-center items-center justify-center justify-items-center gap-2',
  {
    variants: {
      variant: {
        default: 'flex flex-row',
        vertical: 'flex flex-col',
        grid: 'grid grid-cols-4',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const logoVariants = cva('w-auto', {
  variants: {
    variant: {
      default: '',
      vertical: '',
    },
    size: {
      default: 'h-10',
      small: 'h-6',
      large: 'h-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const SocialMedia = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof socialVariants | typeof logoVariants>
>(({ className, variant, size, ...props }, ref) => (
  <div
    className={cn(socialVariants({ variant }), className)}
    {...props}
    ref={ref}
  >
    <SocialLink href='https://www.behance.net/bryanfunk'>
      <BehanceLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://discord.gg/MryeQJ9b'>
      <DiscordLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://hub.docker.com/u/tovutifunk'>
      <DockerLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://dribbble.com/prodkt'>
      <DribbbleLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://figma.com/@prodkt'>
      <FigmaLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://github.com/prodkt'>
      <GithubLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://gitlab.com/prodkt'>
      <GitlabLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://www.instagram.com/prodkt.cloud/'>
      <InstagramLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://www.linkedin.com/in/prodkt/'>
      <LinkedinLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://prodkt.slack.com/'>
      <SlackLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://x.com/prodkt_'>
      <XLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
    <SocialLink href='https://www.youtube.com/@ProdktCloud'>
      <YouTubeLogo className={cn(logoVariants({ size }), className)} />
    </SocialLink>
  </div>
))

const SocialLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, ...props }, ref) => (
  <a {...props} ref={ref}>
    {children}
  </a>
))

SocialMedia.displayName = 'SocialMedia'
SocialLink.displayName = 'SocialLink'

export { SocialMedia, SocialLink }
