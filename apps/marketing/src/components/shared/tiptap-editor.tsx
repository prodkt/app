/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable jsdoc/require-returns */
'use client'

import './placeholder.css'

import React from 'react'

import type { AnyExtension } from '@tiptap/react'

import { CharacterCount } from '@tiptap/extension-character-count'
import { Highlight } from '@tiptap/extension-highlight'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Typography } from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'

import { cn } from '@/utils/cn'

/**
 *
 * @param root0
 * @param root0.content
 * @param root0.setContent
 * @param root0.placeholder
 * @param root0.className
 * @param root0.characterLimit
 * @param root0.proseInvert
 */
export default function RichTextEditor({
  content,
  setContent,
  placeholder,
  className,
  characterLimit,
  proseInvert,
}: {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
  className?: string
  characterLimit?: number
  proseInvert?: boolean
}) {
  const editor = useEditor({
    extensions: [
      StarterKit as AnyExtension,
      Highlight,
      Typography,
      Link.configure({
        HTMLAttributes: {
          class: 'cursor-pointer',
        },
      }),
      Placeholder.configure({
        placeholder: placeholder ?? 'Write something...',
      }),
      CharacterCount.configure({
        limit: characterLimit ?? undefined,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: `prose prose-sm dark:prose-invert focus:outline-none${proseInvert ? ' prose-invert' : ''}`,
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  return (
    <EditorContent
      editor={editor}
      className={cn('size-full p-0 text-sm font-light outline-none', className)}
    />
  )
}
