import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

import path from "path";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "Button",
      fileName: "button",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        format: "es", // Ensure ES module format, which generates index.js
        entryFileNames: "index.js", // Ensures output file name
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  server: {
    watch: {
      usePolling: true, // Use polling to watch for file changes
    },
  },
});
