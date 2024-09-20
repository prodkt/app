import React from 'react'

import { cva } from 'class-variance-authority'
import { ArrowLeft } from 'lucide-react'

import { Badge } from '@/primitives/badge'
import { cn } from '@/utils/cn'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../primitives/accordion'
import { AspectRatio } from '../../primitives/aspect-ratio'

const headingVariants = cva('relative mx-auto w-full max-w-screen-lg pb-20', {
  variants: {
    variant: {
      default: ({ hideToc }: { hideToc?: boolean }) =>
        cn(
          !hideToc ? 'justify-start' : 'justify-center',
          'relative flex flex-col items-center gap-3 text-[var(--grayA10)] after:pointer-events-none after:absolute after:inset-0 after:z-0 after:size-full after:select-none',
        ),
    },
    size: {
      default: 'top-20 px-4 py-12 ',
      noTopPadding: 'top-0 px-4 pb-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

interface TocItem {
  href: string | undefined
  text: string | undefined
}

interface BlogPostProps {
  title?: string | undefined
  'client:only'?: string
  previousText: string
  backLink: string
  date: string
  updated?: string
  image?: string | null // Make sure image is optional
  alt?: string // Make sure alt is optional
  hideToc?: boolean
  hideTags?: boolean
  hideAside?: boolean
  toc?: TocItem[]
  tagList?: TagList
  // tagList?: { text: string | undefined }[];
  asideText?: string // Optional if not always used
  children: React.ReactNode
  size: 'default' | 'noTopPadding' | null | undefined
  variant?: 'default' | null // Adjust based on usage
  className?: string // Add className to props
}
// types.ts
export interface Tag {
  text: string
}

export type TagList = Record<string, Tag[] | undefined>

export interface TagItem {
  changeTo: string[]
}

// For TypeScript to know the exact types used in your functions
export type TagListItem = Tag // If TagListItem is synonymous with Tag

const BlogPost = React.forwardRef<HTMLDivElement, BlogPostProps>(
  (
    {
      title,
      previousText,
      backLink = '/',
      date,
      updated,
      image,
      alt,
      hideToc,
      hideTags,
      hideAside,
      toc,
      tagList,
      asideText,
      children,
      size = 'default',
      variant,
      className,
      ...props
    },
    ref,
  ) => {
    // Component implementation
    return (
      <section
        ref={ref}
        {...props}
        className={cn(headingVariants({ variant, size }), className)}
      >
        <div
          className={cn(
            !hideToc ? 'justify-start' : 'justify-center',
            'flex w-full flex-row items-center gap-4',
          )}
        >
          {!hideAside ? (
            <div className='flex w-1/4 flex-row items-center justify-start'>
              {!hideToc ? (
                <a
                  href={backLink}
                  className='flex w-auto flex-row items-center justify-start gap-2 rounded-xl border py-0 pl-2 hover:bg-[var(--grayA2)]'
                >
                  <ArrowLeft size={16} />
                  <h5 className='z-[1] mr-auto bg-gradient-to-br from-[var(--gray12)] to-[var(--gray1)] bg-clip-text p-2 text-center text-xs font-semibold uppercase tracking-widest text-transparent'>
                    {previousText}
                  </h5>
                </a>
              ) : null}
            </div>
          ) : null}
          <div className='flex w-3/4 flex-row items-center justify-start'>
            <h5 className='z-[1] mr-auto bg-gradient-to-br from-[var(--gray12)] to-[var(--gray1)] bg-clip-text p-2 text-center text-xs font-semibold uppercase tracking-widest text-transparent'>
              Created: {date}
            </h5>
            {updated ? (
              <h5 className='z-[1] mr-auto bg-gradient-to-br from-[var(--gray12)] to-[var(--gray1)] bg-clip-text p-2 text-center text-xs font-semibold uppercase tracking-widest text-transparent'>
                Updated: {updated}
              </h5>
            ) : null}
          </div>
        </div>
        <div
          className={cn(
            !hideToc ? 'justify-start' : 'justify-center',
            'top-0 flex w-full flex-row items-start gap-5',
          )}
        >
          {!hideAside ? (
            <div className='sticky top-20 flex h-full w-1/4 flex-col items-start justify-start gap-4 py-3'>
              {!hideToc ? (
                <section className='h-auto w-3/4 '>
                  <p className='p-2 text-xs uppercase tracking-widest text-[var(--gray7)]'>
                    {asideText}
                  </p>
                  {toc ? (
                    <ol className='p-2'>
                      {toc.map((item, index) => (
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        <li key={index}>
                          <a
                            className='flex items-center justify-start text-balance border-l border-[var(--grayA5)] p-2 px-4 text-xs active:border-[var(--grayA9)]'
                            href={item.href}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p>No Table of Contents available</p>
                  )}
                </section>
              ) : null}

              {!hideTags
                ? tagList && (
                    <section className='h-auto w-3/4'>
                      <p className='hidden p-2 text-xs uppercase tracking-widest text-[var(--gray7)]'>
                        Overview
                      </p>
                      {Object.entries(tagList).map(
                        ([category, tags], index) =>
                          tags &&
                          tags.length > 0 && (
                            <div key={index}>
                              <p className='px-2 text-xs uppercase tracking-widest text-[var(--gray7)]'>
                                {category}
                              </p>
                              <ol className='flex flex-row flex-wrap gap-1 p-2'>
                                {tags.map((tag, tagIndex) => (
                                  <Badge variant='outline' key={tagIndex}>
                                    {tag.text}
                                  </Badge>
                                ))}
                              </ol>
                            </div>
                          ),
                      )}
                    </section>
                  )
                : null}
            </div>
          ) : null}
          <div
            className={cn(
              !hideToc ? 'justify-start' : 'justify-center',
              'flex w-3/4 flex-col items-start gap-8',
            )}
          >
            <h1 className='text-7xl tracking-tighter'>
              {title ? title : 'No title provided'}
            </h1>
            {image ? (
              <AspectRatio
                className='relative z-0 border-none border-transparent bg-[var(--grayA2)] p-0'
                ratio={16 / 9}
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
                <img
                  src={`https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/${image}`}
                  alt={alt ?? 'Default Alt Text'}
                  className='size-full object-cover object-center opacity-100'
                />
              </AspectRatio>
            ) : null}
            <main className='prodkt-blog-content z-[1] w-full'>{children}</main>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[var(--gray4)] to-transparent opacity-0' />
      </section>
    )
  },
)

/**
 *
 * @param root0 - Root accordion
 * @param root0.type - Fixes, enhancements, API
 * @param root0.children - Changelog Fixes or Enhancements
 * @returns ChangelogAccordion
 */
function ChangelogAccordion({
  type,
  children,
}: Readonly<{ type: string; children: React.ReactNode }>) {
  console.log('ChangelogAccordion')
  return (
    <Accordion
      className='w-full rounded-none border border-[var(--grayA3)] bg-[var(--gray3)]'
      type='single'
      collapsible
    >
      <AccordionItem className='border-b-0' value={type}>
        <AccordionTrigger className='border-b-0 px-6'>{type}</AccordionTrigger>
        <AccordionContent className='flex flex-col px-6'>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

BlogPost.displayName = 'BlogPost'

export { BlogPost, ChangelogAccordion }
