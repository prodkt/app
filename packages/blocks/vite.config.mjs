import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Set the main entry file to a fixed name
        entryFileNames: '_astro/client.js',
        // Keep chunk files with hashes to avoid conflicts with dynamic imports
        chunkFileNames: '_astro/client-dynamic.js',
        // Asset file names (for CSS, images, etc.) can also keep their hashed names
        assetFileNames: '_astro/client-[hash].[ext]',
      },
    },
  },
})
