// biome-ignore lint/style/useImportType: <explanation>

import React from 'react'

import type { ReactNode } from 'react'

import '@/styles/globals.css'

import { Theme } from '@radix-ui/themes'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <html lang='en'>
    <head>
      <script src='https://cdn.tailwindcss.com' />
      <link
        rel='stylesheet'
        type='css'
        href='../styles/fonts/prodktFonts.css'
      />
      <link
        rel='stylesheet'
        type='css'
        href='codeblocks/leveln/leveln-output.css'
      />
    </head>
    <body>
      <Theme
        accentColor='mint'
        grayColor='gray'
        panelBackground='solid'
        scaling='100%'
        radius='full'
      >
        <main>{children}</main>
      </Theme>
    </body>
  </html>
)

export default Layout
