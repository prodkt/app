/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */

import { stripTrailingSlash } from './path'

/**
 * Extract the slug from a URL.
 * @param url
 */
export function urlToSlug(url: URL): string {
  let pathname = url.pathname
  const base = stripTrailingSlash(import.meta.env['BASE_URL'] ?? '/')
  if (pathname.startsWith(base)) pathname = pathname.replace(base, '')
  const segments = pathname.split('/')
  const htmlExt = '.html'
  if (segments.at(-1) === 'index.html') {
    // Remove trailing `index.html`.
    segments.pop()
  } else if (segments.at(-1)?.endsWith(htmlExt)) {
    // Remove trailing `.html`.
    const last = segments.pop()
    if (last) segments.push(last.slice(0, -1 * htmlExt.length))
  }
  return segments.filter(Boolean).join('/')
}
