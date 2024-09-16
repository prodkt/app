import type { FC } from 'react'

import FlowAnimatedLogo from './flowAnimatedLogo'
import OlioDashStroke from './olioAnimatedLogo'
import RemixAnimatedLogo from './remixAnimatedLogo'

// Import other components similarly

// Define the type for your component map
type ComponentMap = Record<string, FC<any>>

// Create the map of components
const componentMap: ComponentMap = {
  OlioDashStroke,
  RemixAnimatedLogo,
  FlowAnimatedLogo,
  // Add other components here
}

export { componentMap }
