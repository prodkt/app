import { loadEnv } from 'vite'

import { buildConfig, mergeConfig, reactConfig } from '@prodkt/vite'

// import pkg from './package.json'

// const excludedDeps = ['react', 'react-dom', 'swiper', 'class-variance-authority', 'framer-motion']
const env = loadEnv(process.cwd(), '')
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
        'src/CodeblockComponentMap.tsx',
        'src/primitives/*/index.tsx',
        'src/brands/*/index.tsx',
        'src/prodkt-components/*/index.tsx',
        'src/blocks/*/index.tsx',
        'src/icons/*/index.tsx',
        './src/utils/cn.ts',
        './src/utils/use-mounted.ts',
        './src/utils/kanban.ts',
      ],
    },
    external: {
      // externalizeDeps: Object.keys(pkg.dependencies).filter(
      //   (dep) => !excludedDeps.includes(dep),
      // ),
    },
    dts: {
      exclude: ['src/storybook-utils', '**/*.stories.tsx'],
    },
    define: {
      'process.env': env,
    },
  }),
)
