import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src", "assets"),
      "@components": resolve(__dirname, "src", "components"),
      "@context": resolve(__dirname, "src", "context"),
      "@lib": resolve(__dirname, "src", "lib"),
      "@hooks": resolve(__dirname, "src", "hooks"),
      "@pages": resolve(__dirname, "src", "pages"),
      "@theme": resolve(__dirname, "src", "theme"),
      "@utils": resolve(__dirname, "src", "utils"),
      // '@[folder name]': resolve(__dirname, 'src', '[folder name]')
    },
  },
  server: {
    port: 3000,
  },
});
