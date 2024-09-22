/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import { Navbar } from './navbar'

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
}

/**
 *
 * @param root0
 * @param root0.title
 * @param root0.children
 */
export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      <Navbar title={title} />
      <div className='container px-4 py-8 sm:px-8'>{children}</div>
    </div>
  )
}
