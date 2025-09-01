import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
  build: {
    outDir: "build",
    cssMinify: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        faq: resolve(__dirname, "faq.html"),
        parents: resolve(__dirname, "parents.html"),
        ranks: resolve(__dirname, "ranks.html"),
        events: resolve(__dirname, "events.html"),
        testpage: resolve(__dirname, "test-page.html"),
      },
    },
  },
  publicDir: "public",
});
