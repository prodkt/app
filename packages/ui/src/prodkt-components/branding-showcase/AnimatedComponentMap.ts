import type { FC } from 'react'

import FlowAnimatedLogo from './flowAnimatedLogo'
import OlioDashStroke from './olioAnimatedLogo'
import PlanfoundryAnimatedLogo from './planfoundryAnimatedLogo'
import RemixAnimatedLogo from './remixAnimatedLogo'

// Import other components similarly

// Define the type for your component map
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentMap = Record<string, FC<any>>

// Create the map of components
const componentMap: ComponentMap = {
  OlioDashStroke,
  RemixAnimatedLogo,
  FlowAnimatedLogo,
  PlanfoundryAnimatedLogo,
  // Add other components here
}

export { componentMap }
