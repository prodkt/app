import React from 'react'

import { componentMap } from './AnimatedComponentMap'

interface AnimatedComponentWrapperProps {
  componentName: string
  className?: string
}

const AnimatedComponentWrapper: React.FC<AnimatedComponentWrapperProps> = ({
  componentName,
  className,
}) => {
  const Component = componentMap[componentName]

  if (!Component) {
    return <p>Component not found</p>
  }

  return <Component className={className} />
}

export default AnimatedComponentWrapper
