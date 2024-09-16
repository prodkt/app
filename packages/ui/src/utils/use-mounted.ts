/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */

import * as React from 'react'

/**
 *
 */
export function useMounted() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
