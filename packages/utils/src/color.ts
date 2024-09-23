// /* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
// /* eslint-disable jsdoc/require-jsdoc */

// // Hex to hsl
// export function hexToHSL(H: string | null | undefined) {
//   if (!H) return

//   // Convert hex to RGB first
//   let r = 0
//   let g = 0
//   let b = 0
//   if (H.length === 4) {
//     r = Number.parseInt(H[1] + H[1], 16)
//     g = Number.parseInt(H[2] + H[2], 16)
//     b = Number.parseInt(H[3] + H[3], 16)
//   } else if (H.length === 7) {
//     r = Number.parseInt(H[1] + H[2], 16)
//     g = Number.parseInt(H[3] + H[4], 16)
//     b = Number.parseInt(H[5] + H[6], 16)
//   }

//   // Then to HSL
//   r /= 255
//   g /= 255
//   b /= 255
//   const cmin = Math.min(r, g, b)
//   const cmax = Math.max(r, g, b)
//   const delta = cmax - cmin
//   let h = 0
//   let s = 0
//   let l = 0

//   if (delta === 0) h = 0
//   else if (cmax === r) h = ((g - b) / delta) % 6
//   else if (cmax === g) h = (b - r) / delta + 2
//   else h = (r - g) / delta + 4

//   h = Math.round(h * 60)

//   if (h < 0) h += 360

//   l = (cmax + cmin) / 2
//   s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

//   // Multiply l and s by 100
//   s = +(s * 100).toFixed(1)
//   l = +(l * 100).toFixed(1)

//   return `${h} ${s}% ${l}%`
// }

// // hsl to hex
// export function hslToHex(hsl: string | null) {
//   if (!hsl) return

//   const [hStr, sStr, lStr] = hsl.replaceAll('%', '').split(' ')

//   const h: number = Number.parseFloat(hStr) / 360
//   const s: number = Number.parseFloat(sStr) / 100
//   const l: number = Number.parseFloat(lStr) / 100

//   let r: number
//   let g: number
//   let b: number

//   if (s === 0) {
//     r = l
//     g = l
//     b = l
//   } else {
//     const hue2rgb = (p: number, q: number, t: number): number => {
//       const t1: number = t < 0 ? t + 1 : t
//       const t2: number = t1 > 1 ? t1 - 1 : t1
//       if (t2 < 1 / 6) return p + (q - p) * 6 * t2
//       if (t2 < 1 / 2) return q
//       if (t2 < 2 / 3) return p + (q - p) * (2 / 3 - t2) * 6
//       return p
//     }

//     const q: number = l < 0.5 ? l * (1 + s) : l + s - l * s
//     const p: number = 2 * l - q

//     r = hue2rgb(p, q, h + 1 / 3)
//     g = hue2rgb(p, q, h)
//     b = hue2rgb(p, q, h - 1 / 3)
//   }

//   const toHex = (x: number): string => {
//     const hex: string = Math.round(x * 255).toString(16)
//     return hex.length === 1 ? `0${hex}` : hex
//   }

//   return `#${toHex(r)}${toHex(g)}${toHex(b)}`
// }
