import { buildConfig, mergeConfig, reactConfig } from '@prodkt/vite'

// import pkg from './package.json'

// const excludedDeps = ['react', 'react-dom', 'swiper', 'class-variance-authority', 'framer-motion']
// const exemptedDependencies = new Set([
//   'react',
//   'react-dom',
//   '@dnd-kit',
//   '@codesandbox/sandpack-react',
//   'swiper',
// ])

export default mergeConfig(
  // Vite config to support React.
  reactConfig,

  /**
   * This allows us to use vite to also bundle this package using the `vite build` script, it will also emit TS declaration files using the dts plugin.
   */
  buildConfig({
    lib: {
      entry: [
        'src/primitives/**/*.{ts,tsx,js,jsx}',
        'src/brands/**/*.{ts,tsx,js,jsx}',
        'src/icons/**/*.{ts,tsx,js,jsx}',
        'src/blocks/**/*.{ts,tsx,js,jsx}',
        'src/prodkt-components/**/*.{ts,tsx,js,jsx}',
        './src/utils/cn.ts',
        './src/utils/use-mounted.ts',
        './src/utils/kanban.ts',
        './src/utils/use-store.ts',
      ],
    },
    // ...(process.env.NODE_ENV !== 'production' && {
    // external: Object.keys(pkg.dependencies),
    // }),
    // externalizeDeps: Object.keys(pkg.dependencies).filter(
    //   (dep) => !excludedDeps.includes(dep),
    // ),
    dts: {
      exclude: ['src/storybook-utils', '**/*.stories.tsx'],
    },
    define: {
      'process.env': {},
    },
  }),
)
