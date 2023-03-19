import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      manifest: {
        name: "Andrieu",
        short_name: "Andrieu",
        icons: [
            {
              "src": "/icons/maskable_icon.png",
              "sizes": "196x196",
              "type": "image/png",
              "purpose": "any maskable"
            },
            {
              "src": "/icons/Pierre196.png",
              "type": "image/png",
              "sizes": "192x192"
            },
            {
              "src": "/icons/Pierre512.png",
              "type": "image/png",
              "sizes": "512x512"
            },
        ]
      }
     })
  
  
  ]
})

