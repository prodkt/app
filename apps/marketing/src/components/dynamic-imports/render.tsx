import React from 'react'

import ReactDOMServer from 'react-dom/server'

import { componentMap } from './component-importer' // Ensure this path is correct
import Layout from './layout' // Adjust the import path as necessary

// Function to render a component to a string
export const renderComponentToString = (componentName: string, props = {}) => {
  // eslint-disable-next-line security/detect-object-injection
  const Component = componentMap[componentName]

  if (!Component) {
    throw new Error(`Component ${componentName} not found`)
  }

  // Render the component to a string
  return ReactDOMServer.renderToString(
    <Layout>
      <Component {...props} />
    </Layout>,
  )
}
