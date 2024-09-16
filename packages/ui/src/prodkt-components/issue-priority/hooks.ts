import * as React from 'react'

import type { HotkeyItem } from './helpers'

import { getHotkeyMatcher, shouldFireEvent } from './helpers'

/**
 *
 * @param hotkeys
 * @param tagsToIgnore
 * @param triggerOnContentEditable
 */
export function useHotkeys(
  hotkeys: HotkeyItem[],
  tagsToIgnore: string[] = ['INPUT', 'TEXTAREA', 'SELECT'],
  triggerOnContentEditable = false,
) {
  React.useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      for (const [
        hotkey,
        handler,
        options = { preventDefault: true },
      ] of hotkeys) {
        if (
          getHotkeyMatcher(hotkey)(event) &&
          shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)
        ) {
          if (options.preventDefault) {
            event.preventDefault()
          }

          handler(event)
        }
      }
    }

    document.documentElement.addEventListener('keydown', keydownListener)
    return () => {
      document.documentElement.removeEventListener('keydown', keydownListener)
    }
  }, [hotkeys, tagsToIgnore, triggerOnContentEditable])
}
