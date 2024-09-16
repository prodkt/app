import type { Meta, StoryObj } from '@storybook/react'
import type { Tag, TagList } from '.'

import { BlogPost } from '.'

const data = [
  {
    id: '001b754c-67ba-498c-891d-2775863f7fbd',
    title: 'Image Count on Work Showcase cards',
    content: '\u003Cp\u003Econtent\u003C/p\u003E',
    project_id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
    publish_date: '2024-08-22T11:55:34.281+00:00',
    published: true,
    summary: 'Enhancement: Image Count on Work Showcase cards',
    author_id: {
      id: 'a7a59fa2-44b2-4669-990e-674f87ea534b',
      email: 'bryan.funk@prodkt.cloud',
      full_name: 'Bryan Funk',
      avatar_url:
        'https://gitlab.com/uploads/-/system/project/avatar/52390986/discord.jpg',
    },
    slug: 'enhancement-image-count-showcase-cards',
    image: {
      filename_disk: '3946919f-6de1-4903-a9e3-761ebe82b1db.avif',
    },
    improvements: [
      {
        changeTo: ['Showcase Card'],
        description:
          '\u003Cp\u003EAbility to see how many assets are are showcased within the Showcase item\u003C/p\u003E',
      },
    ],
    fixes: null,
    api: null,
    new: null,
  },
  {
    id: '12d3c006-441b-48aa-8925-d33665af0355',
    title: 'Changelog Launch',
    content: null,
    project_id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
    publish_date: '2024-08-21T14:36:00+00:00',
    published: true,
    summary: null,
    author_id: {
      id: 'a7a59fa2-44b2-4669-990e-674f87ea534b',
      email: 'bryan.funk@prodkt.cloud',
      full_name: 'Bryan Funk',
      avatar_url:
        'https://gitlab.com/uploads/-/system/project/avatar/52390986/discord.jpg',
    },
    slug: 'public-changelog-launch',
    image: {
      filename_disk: '065a2814-51f9-452b-87ee-8bfd85ce85ab.avif',
    },
    improvements: null,
    fixes: null,
    api: [
      {
        changeTo: ['API'],
        description:
          '\u003Cp\u003ENew Changelog API endpoint | \u003Ca href="https://prodkt.cloud/changelog.json" target="_blank" rel="noopener"\u003EView endpoint\u003C/a\u003E\u003C/p\u003E',
      },
    ],
    new: [
      {
        changeTo: ['Changelog'],
        description:
          '\u003Cp\u003EChangelog MVP launched publicly\u003C/p\u003E',
      },
    ],
  },
  {
    id: '48feece6-c3aa-4664-8a1b-9627d051c595',
    title: 'About/Work History CSS issues between Light/Dark modes',
    content: null,
    project_id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
    publish_date: '2024-08-22T17:59:41.826+00:00',
    published: true,
    summary: null,
    author_id: {
      id: 'a7a59fa2-44b2-4669-990e-674f87ea534b',
      email: 'bryan.funk@prodkt.cloud',
      full_name: 'Bryan Funk',
      avatar_url:
        'https://gitlab.com/uploads/-/system/project/avatar/52390986/discord.jpg',
    },
    slug: 'about-me-light-dark-mode-bug-fixes',
    image: {
      filename_disk: '485c6c6d-108e-482a-9331-37e863c13733.avif',
    },
    improvements: [
      {
        changeTo: ['About'],
        description:
          '\u003Cp\u003EWork history in desired order by end_date&nbsp;\u003C/p\u003E',
      },
    ],
    fixes: [
      {
        changeTo: ['About'],
        description:
          '\u003Cp\u003EPrevious employer logos now showcase properly between light and dark modes.\u003C/p\u003E',
      },
      {
        changeTo: ['About'],
        description:
          '\u003Cp\u003EAbove the fold overview cards now display as expected between light and dark modes.\u003C/p\u003E',
      },
      {
        changeTo: ['About'],
        description:
          '\u003Cp\u003EDownload Resume overlay design elements now showcase as intended between light and dark modes.\u003C/p\u003E',
      },
    ],
    api: null,
    new: null,
  },
  {
    id: '5caa3f51-0194-4d62-90c3-bc2faa195b7b',
    title: 'Mobile Viewport Improvements on Landing Page',
    content: null,
    project_id: '364a3d7a-54ef-47e5-86d1-ee2194ad2cc9',
    publish_date: '2024-08-23T15:37:02.072+00:00',
    published: true,
    summary: null,
    author_id: {
      id: 'a7a59fa2-44b2-4669-990e-674f87ea534b',
      email: 'bryan.funk@prodkt.cloud',
      full_name: 'Bryan Funk',
      avatar_url:
        'https://gitlab.com/uploads/-/system/project/avatar/52390986/discord.jpg',
    },
    slug: 'mobile-viewport-landing-page-improvements-august-2024',
    image: {
      filename_disk: '60d9c3d6-eac5-4e65-a212-1e750891590a.avif',
    },
    improvements: [
      {
        changeTo: ['Landing'],
        description:
          '\u003Cp\u003EHide first and last client marquee (shadowed) rows on MD viewport and below.\u003C/p\u003E',
      },
      {
        changeTo: ['Landing'],
        description:
          '\u003Cp\u003ESimplified design on the Prodkt center piece of the stack showcase section.\u003C/p\u003E',
      },
    ],
    fixes: [
      {
        changeTo: ['Landing'],
        description:
          '\u003Cp\u003ESection gaps on MD and lower viewports have complimentary spacing and no longer inherit from LG &amp; above gap values.\u003C/p\u003E',
      },
      {
        changeTo: ['Landing'],
        description:
          '\u003Cp\u003ERemove extended badge from the above the fold hero section on SM and lower viewports due to unwillingness to allow the line to wrap.\u003C/p\u003E',
      },
    ],
    api: null,
    new: [
      {
        changeTo: ['Landing'],
        description:
          '\u003Cp\u003EStack showcase alternative design on MD viewports and below.\u003C/p\u003E',
      },
      {
        changeTo: ['Landing'],
        description:
          '\u003Cp\u003EMany miscellaneous Light/Dark mode adjustments for a better Light mode experience.\u003C/p\u003E',
      },
    ],
  },
]

// Type guard to check if the value is an array of TagItem
const isTagItemArray = (value: any): value is TagItem[] => {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === 'object' && 'changeTo' in item)
  )
}

// Helper function to convert TagItem to TagListItem
const convertToTagListItems = (tagItems: TagItem[] | undefined): Tag[] => {
  if (!tagItems) return []
  return tagItems.flatMap((tag) =>
    tag.changeTo.map((change) => ({ text: change })),
  )
}

// Function to process data object
const processTags = (data: ChangelogData): TagList => {
  const tagList: TagList = {}

  // Accessing the changelogData array from the data object
  data.changelogData.forEach((item) => {
    if (isTagItemArray(item.improvements)) {
      tagList['improvements'] = convertToTagListItems(item.improvements)
    }
    if (isTagItemArray(item.fixes)) {
      tagList['fixes'] = convertToTagListItems(item.fixes)
    }
    if (isTagItemArray(item.api)) {
      tagList['api'] = convertToTagListItems(item.api)
    }
    if (isTagItemArray(item.new)) {
      tagList['new'] = convertToTagListItems(item.new)
    }
  })

  return tagList
}

// Usage example
const tagListData: TagList = processTags(data)

const meta: Meta<typeof BlogPost> = {
  component: BlogPost,
  args: {},
  // argTypes: {
  //   variant: {
  //     options: [
  //       "default",
  //     ],
  //     control: { type: "select" },
  //   },
  //   size: {
  //     options: [
  //       "default",
  //     ],
  //     control: { type: "select" },
  //   },
  //   swatch: {
  //     options: [
  //       "default",
  //     ],
  //     control: { type: "select" },
  //   },
  // }
}

// const tagList: TagList = {
//   improvements: data.flatMap((post) =>
//     post.improvements?.map((improvement) => ({
//       changeTo: improvement.changeTo.flatMap((item) => item.changeTo),
//     })) ?? []
//   ),
//   new: data.flatMap((post) =>
//     post.new?.map((newItem) => ({
//       changeTo: newItem.changeTo.flatMap((item) => item.changeTo),
//     })) ?? []
//   ),
//   fixes: [], // Similar transformation logic here if necessary
//   api: [], // Similar transformation logic here if necessary
// };

export default meta
type Story = StoryObj<typeof BlogPost>

export const Default: Story = {
  render: () => (
    <BlogPost
      tagList={tagListData}
      title={data[0]?.title}
      size='default'
      alt='Blog Image'
      backLink='/blog'
      previousText='Back to blog'
      date='August 7th, 2024'
    >
      content
    </BlogPost>
  ),
}
