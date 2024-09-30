import type { Database } from '@/database.types'
import type { Data } from '@/icons/navigation'
import type { Meta, StoryObj } from '@storybook/react'

import { BlogPost } from '.'

interface Data {
  blogData: Database['public']['Tables']['articles']
  title?: string
}
const data = {
  slug: 'how-to-keep-workflow-consistent-while-traveling',
  blogData: [
    {
      id: 'f204224e-9cf1-45b0-ba81-01c9c8c72560',
      status: 'published',
      sort: null,
      user_created: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_created: '2024-08-22T18:55:13.334+00:00',
      user_updated: '676a7473-3f2b-489d-8a3e-8ebd3552961d',
      date_updated: '2024-08-22T20:05:43.908+00:00',
      author: {
        title: 'Frontend Technologist',
        avatar: { filename_disk: '3d4d268c-07c9-4e0b-86d3-0ec76792ac6c.avif' },
        last_name: 'Funk',
        first_name: 'Bryan',
      },
      title: 'How to Keep Workflow Consistent While Traveling',
      excerpt:
        "Over the past few years of traveling, I have received many questions about how I'm able to maintain consistent velocity while on the move. ",
      content: null,
      slug: 'how-to-keep-workflow-consistent-while-traveling',
      image: { filename_disk: 'ce81fd3e-0dda-4620-aacc-69022d046d88.webp' },
      content_block:
        '<p>Over the past few years of traveling, I have received many questions about my workstation setup. If you know me, you have likely seen some of the elaborate accommodations I use. This might come as a surprise to you. If I have visited your site or worked with your team on a project, you have probably witnessed some of the challenges I face. Traveling frequently for business brings a variety of efficiency issues, especially with the added elements of rapid growth, team building, and managing business objectives. Finding time to meet the increasing demand for output can be quite challenging.</p>\n<p><img src="https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/dee302fe-5ce5-4d6e-ba5c-aebd4ee7dd32.webp?width=1920&amp;height=1020" alt="Bryan Funk Mobile Computer Setup"></p>\n<p>As travel started to resume after the pandemic, I realized that the comforts of a home office could not be replicated on the road. The environment I have created for myself to maximize efficiency in terms of technology standards and comfort level was difficult to maintain while traveling. I recognized that the most important factors for me were mobility, access to my tools quickly, and maintaining a continuous level of productivity. It took some time, but once I found what worked best for me, I felt more comfortable.</p>\n<p>I made intentional choices to have identical configurations for my main office, home office, travel equipment, and laptop. This consistency was crucial for me as I often move rapidly, sometimes faster than the machine itself depending on the scope of my work. In addition to focusing on factors like storage space and expandability, I emphasized portability to create an efficient travel workstation.</p>\n<p><img src="https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/fa82cd0c-6059-4223-b6b6-71deba261372.webp?width=1920&amp;height=939" alt="Bryan Funk Setup 1"></p>\n<p>If you have any questions, feel free to email me. Here is a list of the setup I have ended up with, which I now find more comfortable than any other configuration I have used in the past.</p>\n<h3>Mac Mini M2</h3>\n<p><img src="https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/afe847c9-6705-440a-a0b4-9c0d95dba68f.webp?width=1200&amp;height=630" alt="Prodkt Setup Mac Mini"></p>\n<h3>WD Black 2TB SSD (x3)</h3>\n<p><img src="https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/1e1f2ee8-44ca-41be-97a4-af53006a6c5b.webp?width=1200&amp;height=630" alt="Prodkt Setup Wd Black"></p>\n<h3>MX Master 2S</h3>\n<p><img src="https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/b78f0b5d-03cd-4d4d-9f0d-ac1cc88a87d3.webp?width=1200&amp;height=630" alt="Prodkt Setup Mx Master"></p>\n<h3>k380</h3>\n<p><img src="https://odzdpcvclydcqawdagdt.supabase.co/storage/v1/object/public/prodkt/848c5f93-b5e1-41fa-840a-21b20853d28c.webp?width=1200&amp;height=630" alt="Prodkt Setup K380"></p>',
    },
  ],
  status: 200,
} as unknown as Data

// // Type guard to check if the value is an array of TagItem
// const isTagItemArray = (value: any): value is TagItem[] => {
//   return (
//     Array.isArray(value) &&
//     value.every((item) => typeof item === 'object' && 'changeTo' in item)
//   )
// }

// // Helper function to convert TagItem to TagListItem
// const convertToTagListItems = (tagItems: TagItem[] | undefined): Tag[] => {
//   if (!tagItems) return []
//   return tagItems.flatMap((tag) =>
//     tag.changeTo.map((change) => ({ text: change })),
//   )
// }

// // Function to process data object
// const processTags = (data: ChangelogData): TagList => {
//   const tagList: TagList = {}

//   // Accessing the changelogData array from the data object
//   data.changelogData.forEach((item) => {
//     if (isTagItemArray(item.improvements)) {
//       tagList['improvements'] = convertToTagListItems(item.improvements)
//     }
//     if (isTagItemArray(item.fixes)) {
//       tagList['fixes'] = convertToTagListItems(item.fixes)
//     }
//     if (isTagItemArray(item.api)) {
//       tagList['api'] = convertToTagListItems(item.api)
//     }
//     if (isTagItemArray(item.new)) {
//       tagList['new'] = convertToTagListItems(item.new)
//     }
//   })

//   return tagList
// }

// // Usage example
// const tagListData: TagList = processTags(data)

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
      title={data.blogData[0].title}
      image={data.blogData[0].image.filename_disk}
      size='default'
      alt='Blog Image'
      backLink='/blog'
      previousText='Back to blog'
      date={data.blogData[0].date_created}
      updated={data.blogData[0].date_updated}
    >
      content
    </BlogPost>
  ),
}
