import { useEffect } from 'react'

import { addons, types, useGlobals } from '@storybook/manager-api'

import theme from './theme'

addons.setConfig({
  theme: theme,
})

const ExampleToolbar = () => {
  const [globals] = useGlobals()

  useEffect(() => {
    const elements = document.querySelectorAll('.docs-story')

    elements.forEach((element) => {
      // Add a class based on the theme
      element.classList.add(globals['theme'] as string)

      // // Set a data attribute for accent color based on the theme
      // element.setAttribute('data-accent-color', globals['theme'] as string);

      // // Set a hard-coded data attribute for accent color
      // element.setAttribute('data-accent-color', 'violet'); // Replace 'violet' with the desired hard-coded value
    })
  }, [globals])

  return null
}

export const registerAddons = () => {
  addons.register('docs-theme', () => {
    addons.add('docs-theme-addon', {
      title: 'Addon to change docs story theme',
      type: types.TOOL,
      match: ({ viewMode }) => !!viewMode?.match(/^(?:story|docs)$/),
      render: ExampleToolbar,
    })
  })
}
