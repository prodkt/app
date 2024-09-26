import { grayDark, violetDark } from '@radix-ui/colors'
import { create } from '@storybook/theming'

export default create({
  base: 'dark',
  fontBase: 'var(--font-labil-grotesk)',
  fontCode: 'var(--font-ibm-plex-mono)',
  appContentBg: grayDark.gray3,
  appBg: grayDark.gray1,
  barBg: grayDark.gray3,
  inputBg: grayDark.gray3,
  buttonBg: grayDark.gray3,
  booleanBg: grayDark.gray3,
  appBorderColor: grayDark.gray4,
  appBorderRadius: 8,
  inputBorderRadius: 8,
  inputBorder: grayDark.gray6,
  buttonBorder: grayDark.gray6,
  textColor: grayDark.gray11,
  colorSecondary: violetDark.violet9,
  colorPrimary: violetDark.violet9,
  barTextColor: grayDark.gray11,
  barHoverColor: violetDark.violet9,
  barSelectedColor: violetDark.violet9,
  inputTextColor: grayDark.gray11,
  textMutedColor: grayDark.gray10,
  textInverseColor: grayDark.gray1,
})
