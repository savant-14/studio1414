import { defineConfig } from 'vite';

// Multi-page static site. All runtime assets live in /public and are referenced
// with root-absolute paths, so Vite copies them verbatim (no bundling of the
// in-browser-Babel JSX or the three.js hero module). React, Babel-standalone and
// three.js load from CDN at runtime (see the <script> tags + importmap in the HTML).
export default defineConfig({
  appType: 'mpa',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html',
        solutions: 'solutions.html',
        contact: 'contact.html',
      },
    },
  },
});
