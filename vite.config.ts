import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSWC()],
  resolve: {
    alias: {
      "@components/*": "components/*",
      "@containers/*": "containers/*",
      "@assets/*": "assets/*",
      "@styles/*": "styles/*",
      "@layout/*": "layout/*",
      "@pages/*": "pages/*",
      "@helpers/*": "helpers/*",
      "@hooks/*": "hooks/*",
      "@store/*": "store/*",
      "@models/*": "models/*",
      "@services/*": "services/*",
      "@types/*": "types/*",
      "@utils/*": "utils/*",
      "@languages/*": "languages/*"
    },
  },
})
