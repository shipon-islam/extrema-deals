import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import VitePluginSass from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSass()],
});
