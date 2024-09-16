import { mauveDark, violetDark } from '@radix-ui/colors'
import { create } from '@storybook/theming'

export default create({
  base: 'dark',
  fontBase: 'var(--font-labil-grotesk)',
  fontCode: 'var(--font-ibm-plex-mono)',
  appContentBg: mauveDark.mauve1,
  appBg: mauveDark.mauve1,
  barBg: mauveDark.mauve1,
  inputBg: mauveDark.mauve3,
  buttonBg: mauveDark.mauve3,
  booleanBg: mauveDark.mauve3,
  appBorderColor: mauveDark.mauve2,
  appBorderRadius: 8,
  inputBorderRadius: 8,
  inputBorder: mauveDark.mauve6,
  buttonBorder: mauveDark.mauve6,
  textColor: mauveDark.mauve11,
  colorSecondary: violetDark.violet9,
  colorPrimary: violetDark.violet9,
  barTextColor: mauveDark.mauve11,
  barHoverColor: violetDark.violet9,
  barSelectedColor: violetDark.violet9,
  inputTextColor: mauveDark.mauve11,
  textMutedColor: mauveDark.mauve10,
  textInverseColor: mauveDark.mauve1,
})
