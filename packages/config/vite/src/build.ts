/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */
/* eslint-disable jsdoc/require-param-description */

import type { LibraryOptions } from 'vite'
import type { PluginOptions as DtsPluginOptions } from 'vite-plugin-dts'
import type { Options as ExternalPluginOptions } from 'vite-plugin-external'

import { globbySync } from 'globby'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import sass from 'sass'
import { defineConfig, loadEnv } from 'vite'
import dtsPlugin from 'vite-plugin-dts'
import createExternal from 'vite-plugin-external'

const env = loadEnv(process.cwd(), '')
/**
 * A vite config preset for bundling packages in lib mode.
 * @param params The parameters that the function takes.
 * @param params.lib override vite's `build.lib` options.
 * @param params.dts override the `vite-plugin-dts` options.
 * @param params.external override the `vite-plugin-external` options.
 * @param params.define
 * @returns a vite configuration object
 */
export function buildConfig({
  lib,
  dts = {},
  external = {},
}: {
  lib: LibraryOptions & {
    entry: string[] | string
  }
  define: {
    'process.env': typeof env
  }
  dts?: DtsPluginOptions
  external?: ExternalPluginOptions
}) {
  return defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          // This passes options to the Dart Sass compiler
          sassOptions: {
            silenceDeprecations: ['legacy-js-api'], // Silence the legacy API warnings
          },
        },
      },
    },
    plugins: [
      createExternal({
        nodeBuiltins: true,
        ...external,
        name: 'configure-sass',
        configResolved() {
          // Modify the Sass render function globally
          sass.render = ((originalRender) => (options, callback) => {
            // Add the silenceDeprecations option
            options.silenceDeprecations = ['legacy-js-api']
            originalRender.call(sass, options, callback)
          })(sass.render)
        },
      }),
      dtsPlugin({
        compilerOptions: {
          tsBuildInfoFile: 'tsconfig.build.tsbuildinfo',
          outDir: 'dist',
          rootDir: 'src',
          noEmit: false,
          ...dts.compilerOptions,
        },
        include: ['src/**/*.ts', 'src/**/*.tsx'],
        ...dts,
      }),
    ],
    build: {
      sourcemap: 'inline',
      rollupOptions: {
        plugins: [
          preserveDirectives({
            suppressPreserveModulesWarning: true,
          }),
        ],
        external: [/node_modules/],
        output: {
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: 'dist',
        },
        treeshake: true,
        onwarn(warning, defaultHandler) {
          if (warning.code === 'SOURCEMAP_ERROR') {
            return
          }
          defaultHandler(warning)
        },
      },
      lib: {
        formats: ['es', 'cjs'],
        ...lib,
        entry: globbySync(lib.entry),
      },
    },
  })
}
