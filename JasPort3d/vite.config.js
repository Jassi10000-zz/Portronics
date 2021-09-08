import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    chunkSizeWarningLimit:3000,
    rollupOptions: {
        output:{
            manualChunks(id) {
              if (id.includes('node_modules')) {
                
                  return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
          }
        }
    }
  }
})