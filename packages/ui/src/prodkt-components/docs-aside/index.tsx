import type { ReactNode } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../primitives/accordion'

/**
 * DocsAside Component
 * @param root0
 * @param root0.children
 */
export function DocsAside({
  children,
  ...props
}: Readonly<{ children: ReactNode }>) {
  return (
    <Accordion type='multiple' className='w-full' {...props}>
      {children}
    </Accordion>
  )
}

interface DocPage {
  date_created: string | null
  date_updated: string | null
  id: string
  slug: string | null
  sort: number | null
  status: string
  title: string
  user_created: string | null
  user_updated: string | null
}

interface DocGroup {
  page: DocPage
  date_created: string | null
  date_updated: string | null
  group_slug: string | null
  id: string
  sort: number | null
  status: string
  title: string
  user_created: string | null
  user_updated: string | null
}

interface DocBlock {
  block_subheading: string
  block_content: string
  codeblock_filename?: string
  codeblock?: string | null
}

interface DocGroupItem {
  id: string
  status: string
  sort: string | null
  user_created: string
  date_created: string
  user_updated: string
  date_updated: string
  title: string
  anchor_slug: string
  block: DocBlock[] | null
  group: DocGroup
  group_codeblocks: boolean
}

interface DocTabsProps {
  docGroup: DocGroupItem[]
}

/**
 * DocTabs Component
 * @param root0
 * @param root0.docGroup
 */
export function DocTabs({ docGroup }: Readonly<DocTabsProps>) {
  // Group by group.page.title, sorting by page.sort first
  const groupData = docGroup.reduce<
    Record<string, { page: DocPage; items: DocGroupItem[] }>
  >((acc, item) => {
    const pageTitle = item.group.page.title

    if (!acc[pageTitle]) {
      acc[pageTitle] = {
        page: item.group.page,
        items: [],
      }
    }

    acc[pageTitle].items.push(item)

    return acc
  }, {})

  // Convert grouped data to array and sort by page.sort
  const groupedArray = Object.values(groupData).sort(
    (a, b) => (a.page.sort ?? 0) - (b.page.sort ?? 0),
  )

  return (
    <DocsAside>
      {groupedArray.map(({ page, items }, index) => (
        <AccordionItem key={index} value={page.title}>
          <AccordionTrigger>
            <h6 className='flex w-full border-b-0 border-none px-3 text-left font-mono text-xs font-medium uppercase text-[var(--gray11)]'>
              {page.title}
            </h6>
          </AccordionTrigger>
          <AccordionContent>
            <ol className='flex flex-col items-start justify-start w-full gap-1 py-2 pb-0 text-xs border-t'>
              {items
                .sort((a, b) => (a.group.sort ?? 0) - (b.group.sort ?? 0)) // Sort by group.sort
                .map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className='flex items-center justify-start w-full'
                  >
                    <a
                      href={`/docs/${item.group.page.slug}#${item.group.group_slug}`}
                      className='w-full px-3 py-2 text-[var(--gray11)] hover:text-[var(--gray12)]'
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      ))}
    </DocsAside>
  )
}
