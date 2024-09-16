import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react'

import {
  // getSandpackCssText,
  SandpackCodeEditor,
  SandpackCodeViewer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from '@codesandbox/sandpack-react/unstyled'
import { monokaiPro } from '@codesandbox/sandpack-themes'

// const cssTextOutput = getSandpackCssText()

export type ComponentData = SandpackFiles
export type ComponentTemplate = SandpackPredefinedTemplate

const CodeEditor = ({
  componentData,
  template = 'astro',
}: {
  componentData: ComponentData
  template: ComponentTemplate
}) => (
  <SandpackProvider
    theme={monokaiPro}
    files={componentData}
    options={{
      classes: {
        'sp-wrapper': 'prodkt-codeblock-wrapper',
        'sp-layout': 'prodkt-codeblock-layout',
        'sp-editor': 'prodkt-codeblock-editor',
        'sp-tabs': 'prodkt-codeblock-tabs',
        'sp-tabs-scrollable-container':
          'prodkt-codeblock-tabs-scrollable-container',
        'sp-tab-container': 'prodkt-codeblock-tab-container',
        'sp-tab-button': 'prodkt-codeblock-tab-button',
        'cm-editor': 'prodkt-codemirror-editor',
        'cm-scroller': 'prodkt-codemirror-scroller',
        'cm-gutters': 'prodkt-codemirror-gutters',
        'cm-content': 'prodkt-codemirror-content',
        'sp-read-only': 'prodkt-codeblock-read-only',
        'sp-code-editor:': 'prodkt-codeblock-code-editor',
        'sp-pre-placeholder:': 'prodkt-codeblock-pre-placeholder',
        'sp-tabs-scrollable-container:':
          'prodkt-codeblock-tabs-scrollable-container',
        'sp-code-editor': 'prodkt-code-editor',
        'sp-cm': 'prodkt-cm-editor',
        'sp-syntax-string': 'prodkt-syntax-string',
        'sp-syntax-property': 'prodkt-syntax-property',
        'sp-syntax-definition': 'prodkt-syntax-definition',
        'sp-syntax-punctuation': 'prodkt-syntax-punctuation',
        'sp-syntax-plain': 'prodkt-syntax-plain',
        'sp-syntax-keyword': 'prodkt-syntax-keyword',
        'sp-syntax-static': 'prodkt-syntax-static',
      },
    }}
    // options={{
    //   visibleFiles: ['/App.js', '/button.js', '/index.js'],
    //   activeFile: '/button.js',
    // }}
    template={template}
  >
    <SandpackLayout>
      <SandpackCodeEditor
        showTabs={true}
        showLineNumbers={true}
        showInlineErrors
        wrapContent
        closableTabs={false}
      />
    </SandpackLayout>
  </SandpackProvider>
)

const CodeViewer = () => (
  <SandpackProvider template='react'>
    <SandpackLayout>
      <SandpackCodeViewer />
      <SandpackPreview />
    </SandpackLayout>
  </SandpackProvider>
)

export { CodeEditor, CodeViewer }
