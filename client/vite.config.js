import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   server: {
    open: true,     // ✅ This will auto-open the browser
    port: 5173,     // (optional) set custom port
  },
  proxy:{
    "/api":{
      target:"http://localhost:8081",
      changeOrigin:true,
      secure:false
    }
  }
  ,
})
