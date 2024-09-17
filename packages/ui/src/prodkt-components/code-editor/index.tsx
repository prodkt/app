import type {
  SandpackFiles,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react'

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from '@codesandbox/sandpack-react'
import { monokaiPro } from '@codesandbox/sandpack-themes'

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
      bundlerURL: 'https://sandpack-bundler.codesandbox.io',
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

export { CodeEditor }
