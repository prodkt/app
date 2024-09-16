/**
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string.
 */
function formatDate(dateString: string | null): string {
  if (!dateString) return ''

  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', options)
}

export { formatDate }
