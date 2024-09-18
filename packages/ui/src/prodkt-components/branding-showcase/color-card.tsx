/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-returns */
/* eslint-disable jsdoc/require-param-description */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import chroma from 'chroma-js'
import { cva } from 'class-variance-authority'
import { Locate } from 'lucide-react'

import { cn } from '@/utils/cn'

// import type { Database } from '@/database.types'

// type TokenTypes = Database['public']['Tables']['design_tokens']['Row']

export interface SwatchProps {
  key_hsl: string
  value_hsl: string
  key_use: string
  isDark: boolean
  key: string | number | undefined
}

/**
 *
 * @param root0
 * @param root0.key_hsl
 * @param root0.value_hsl
 * @param root0.key_use
 * @param root0.isDark
 */
export default function ColorCard({
  key_hsl,
  value_hsl,
  key_use,
  isDark,
}: Readonly<SwatchProps>) {
  const getKeyUse = (key_hsl: string) => {
    const step = Number.parseInt(key_hsl, 10)
    if (step >= 1 && step <= 2) return 'Backgrounds'
    if (step >= 3 && step <= 5) return 'Interactive components'
    if (step >= 6 && step <= 8) return 'Borders and separators'
    if (step >= 9 && step <= 10) return 'Solid colors'
    if (step >= 11 && step <= 12) return 'Accessible text'
    return ''
  }

  const calculateContrastRatio = (color1: string, color2: string) => {
    return chroma.contrast(color1, color2).toFixed(2)
  }

  const getContrastAndRating = (key_hsl: string, value_hsl: string) => {
    const color = value_hsl
    let contrastRatio = 'N/A'
    let accessibilityRating = 'N/A'

    if (
      Number.parseInt(key_hsl, 10) >= 1 &&
      Number.parseInt(key_hsl, 10) <= 5
    ) {
      // For key_hsl 1-5, compare with accessible text colors
      const compareColors = ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 0%)'] // Examples of accessible text colors

      const ratios = compareColors.map((compareColor) =>
        Number.parseFloat(calculateContrastRatio(color, compareColor)),
      )
      contrastRatio = Math.max(...ratios).toFixed(2) // Take the best (highest) contrast ratio
      accessibilityRating =
        Number.parseFloat(contrastRatio) >= 7
          ? 'AAA'
          : Number.parseFloat(contrastRatio) >= 4.5
            ? 'AA'
            : 'Fail'
    } else if (
      Number.parseInt(key_hsl, 10) >= 11 &&
      Number.parseInt(key_hsl, 10) <= 12
    ) {
      // For key_hsl 11-12, compare with interactive component colors
      const compareColors = ['hsl(0, 0%, 90%)', 'hsl(0, 0%, 10%)'] // Examples of interactive component colors

      const ratios = compareColors.map((compareColor) =>
        Number.parseFloat(calculateContrastRatio(color, compareColor)),
      )
      contrastRatio = Math.max(...ratios).toFixed(2) // Take the best (highest) contrast ratio
      accessibilityRating =
        Number.parseFloat(contrastRatio) >= 7
          ? 'AAA'
          : Number.parseFloat(contrastRatio) >= 4.5
            ? 'AA'
            : 'Fail'
    }

    return { contrastRatio, accessibilityRating }
  }

  const { contrastRatio, accessibilityRating } = getContrastAndRating(
    key_hsl,
    value_hsl,
  )

  const cardSwatch = cva(
    'col-span-1 flex min-h-56 w-full flex-col items-center justify-end p-2 text-xs',
    {
      variants: {
        variant: {
          default: 'rounded-2xl',
          hasHsl: 'rounded-2xl',
          rounded: '',
        },
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  )

  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  let textColor
  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  let borderColor
  const customVar = '--colorCardBorder'
  const customBg = '--colorCardTagBg'
  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  let tagBg

  if (isDark) {
    textColor = 'var(--gray-12)'
    borderColor = 'var(--ghost-a5)'
    tagBg = 'var(--ghost-a3)'
    if (
      Number.parseInt(key_hsl, 10) >= 9 &&
      Number.parseInt(key_hsl, 10) <= 12
    ) {
      textColor = 'var(--gray-1)'
      borderColor = 'var(--ghost-aa3)'
      tagBg = 'var(--ghost-aa2)'
    }
  } else {
    textColor = 'var(--gray-1)'
    borderColor = 'var(--ghost-aa5)'
    tagBg = 'var(--ghost-aa2)'
    if (
      Number.parseInt(key_hsl, 10) >= 7 &&
      Number.parseInt(key_hsl, 10) <= 12
    ) {
      textColor = 'var(--gray-12)'
      borderColor = 'var(--ghost-a5)'
      tagBg = 'var(--ghost-a2)'
    }
  }

  const combinedClasses = cn(
    cardSwatch({
      variant: value_hsl ? 'hasHsl' : 'default',
    }),
  )

  return (
    <div
      className={combinedClasses}
      style={{
        backgroundColor: value_hsl,
        color: textColor,
        // @ts-expect-error
        [customVar]: borderColor,
        [customBg]: tagBg,
      }}
    >
      <div className='relative flex flex-col items-start justify-end w-full max-w-full gap-2 mt-0 mb-auto ml-auto mr-0'>
        <div className='flex h-full w-auto flex-row items-center justify-center rounded-lg border border-[var(--colorCardBorder)]'>
          <div className='flex h-full items-center justify-center rounded-l-lg bg-[var(--colorCardTagBg)] px-2 py-1.5'>
            {key_hsl}
          </div>
          <div className='my-0 flex h-full w-px min-w-px items-center justify-center rounded-l-lg bg-[var(--colorCardBorder)] opacity-50' />
          <div className='flex h-full items-center justify-center px-2 py-1.5'>
            <p className='overflow-hidden line-clamp-1 text-ellipsis'>
              {value_hsl}
            </p>
          </div>
        </div>
        {Number.parseInt(key_hsl, 10) < 6 ||
        Number.parseInt(key_hsl, 10) > 10 ? (
          <div className='flex h-full flex-row items-center justify-center rounded-lg border border-[var(--colorCardBorder)]'>
            <div className='flex h-full items-center justify-center rounded-l-lg bg-[var(--colorCardTagBg)] px-2 py-1.5'>
              {accessibilityRating}
            </div>
            <div className='my-0 flex h-full w-px min-w-px items-center justify-center rounded-l-lg bg-[var(--colorCardBorder)] opacity-50' />
            <div className='flex h-full items-center justify-center px-2 py-1.5'>
              {contrastRatio}
            </div>
          </div>
        ) : null}
        <div className='flex h-full flex-row items-center justify-center rounded-lg border border-[var(--colorCardBorder)]'>
          <div className='flex h-full items-center justify-center rounded-l-lg bg-[var(--colorCardTagBg)] px-2 py-1.5'>
            <Locate size='14' />
          </div>
          <div className='my-0 flex h-full w-px min-w-px items-center justify-center rounded-l-lg bg-[var(--colorCardBorder)] opacity-50' />
          <div className='flex h-full items-center justify-center px-2 py-1.5 text-left'>
            <p className='w-full max-w-full overflow-hidden text-left line-clamp-1 text-ellipsis'>
              {getKeyUse(key_use)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
