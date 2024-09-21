import { forwardRef } from 'react'

import type { VariantProps } from 'class-variance-authority'
import type React from 'react'
import type { ReactNode } from 'react'

import { cva } from 'class-variance-authority'
import { ExternalLink } from 'lucide-react'

import { AspectRatio } from '@/primitives/aspect-ratio'
import { Button } from '@/primitives/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShadCard,
} from '@/primitives/card'
import { cn } from '@/utils/cn'

const cardVariants = cva('relative h-full grow', {
  variants: {
    variant: {
      default: '',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const Card = forwardRef<
  HTMLAnchorElement,
  React.HTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof cardVariants> & {
      link: string
      excerpt: string | ReactNode
      image?: string
      alt?: string
      date?: string
      buttonText?: string
      title: string | null | undefined
    }
>(
  (
    {
      link = '/',
      title = 'Title',
      buttonText = 'Read more',
      excerpt = 'Excerpt',
      image,
      alt,
      className,
      date,
      variant,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        href={link}
        className={cn(cardVariants({ variant }), className)}
        {...props}
        ref={ref}
      >
        <div className='absolute inset-x-1/2 -top-1/2 mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -top-1/2 left-1/4 mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -top-1/2 right-1/4 mx-auto mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />

        <div className='absolute -left-0 -top-1/2 mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -right-0 -top-1/2 mb-auto mt-0 h-[200%] w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />

        <div className='absolute -left-0 -top-10 bottom-auto mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -left-10 -top-0 bottom-auto mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />

        <div className='absolute -right-0 -top-10 bottom-auto mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -right-10 -top-0 bottom-auto mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />

        <div className='absolute -bottom-10 -left-0 top-auto mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -bottom-0 -left-10 top-auto mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />

        <div className='absolute -bottom-10 -right-0 top-auto mb-auto mt-0 h-20 w-px max-w-px rounded-none bg-gradient-to-b from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />
        <div className='absolute -bottom-0 -right-10 top-auto mb-auto mt-0 h-px max-h-px w-20 rounded-none bg-gradient-to-r from-[var(--grayA1)] via-[var(--grayA3)] to-[var(--grayA1)]' />

        <div className='absolute -left-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7' />
        <div className='absolute -right-1 -top-1 bottom-auto mb-auto mt-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7' />
        <div className='absolute -bottom-1 -left-1 top-auto my-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7' />
        <div className='absolute -bottom-1 -right-1 top-auto my-0 size-2 rounded-none border border-ghost-a7 bg-ghost-aa7' />
        <ShadCard className='group relative h-full justify-between overflow-hidden rounded-none border border-[var(--grayA7)] bg-[var(--grayA2)] shadow-none transition-colors duration-300 hover:border-[var(--grayA5)] hover:bg-[var(--grayA3)]'>
          <img
            src={
              image
                ? `https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${image}`
                : 'https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1662d152-933f-414d-9230-c4b19c773557.avif'
            }
            aria-label={alt ?? 'Default Alt Text'}
            className='card-mask absolute z-0 size-full max-h-full scale-125 border border-transparent object-cover object-top opacity-50 brightness-50 contrast-50 saturate-150 transition-transform duration-500 group-hover:scale-105'
          />
          <CardHeader>
            <AspectRatio
              className='overflow-hidden rounded-2xl border-none border-transparent p-0'
              ratio={16 / 9}
            >
              <img
                src={
                  image
                    ? `https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${image}`
                    : 'https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1662d152-933f-414d-9230-c4b19c773557.avif'
                }
                aria-label={alt ?? 'Default Alt Text'}
                className='size-full rounded-[calc(1rem_-_2px)] border border-transparent object-cover object-center opacity-0'
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className='z-[2] flex flex-col gap-4'>
            <CardTitle className='line-clamp-2 text-balance leading-normal'>
              {title}
            </CardTitle>
            <CardDescription className='line-clamp-3'>
              {excerpt}
            </CardDescription>
          </CardContent>
          <CardFooter className='bottom-0 z-[2] mb-0 mt-auto'>
            <Button
              className='mb-0 mt-auto gap-2 px-0 underline-offset-8 group-hover:underline'
              variant='link'
            >
              {buttonText} <ExternalLink size={15} />
            </Button>
            {date && (
              <p className='ml-auto mr-0 text-xs text-[var(--grayA9)]'>
                {date}
              </p>
            )}
          </CardFooter>
        </ShadCard>
      </a>
    )
  },
)

Card.displayName = 'Card'

export { Card }
